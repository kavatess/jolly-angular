import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { AUTH_REQUEST_BEGIN, LOCAL_STORAGE_KEY } from '../../app-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private localStorage: LocalStorageService, private router: Router) { }

  isLoggedIn(): boolean {
    return !!this.getAuthToken() && !!this.getUserInfo();
  }

  getAuthToken(): string | null {
    return this.localStorage.retrieve(LOCAL_STORAGE_KEY.TOKEN);
  }

  getUserInfo(): User | null {
    return this.localStorage.retrieve(LOCAL_STORAGE_KEY.USER);
  }

  login(loginInfo: LoginModel): Observable<boolean> {
    return this.http.post(AUTH_REQUEST_BEGIN + '/login', loginInfo)
      .pipe(
        tap(authInfo => this.storeAuthInfo(authInfo)),
        mapTo(true),
        catchError(_err => {
          return of(false);
        })
      );
  }

  updateUserInfo(user: User): void {
    this.http.post(AUTH_REQUEST_BEGIN + '/user/update', user).subscribe(_res => {
      this.logout();
    });
  }

  changePassword(newPasswordInfo: { phoneNumber: string, oldPassword: string, newPassword: string }): Observable<any> {
    return this.http.post(AUTH_REQUEST_BEGIN + '/password/update', newPasswordInfo);
  }

  logout(): void {
    this.clearAuthInfo();
    this.router.navigate(['login']);
  }

  private storeAuthInfo({ token, user }: any): void {
    this.localStorage.store(LOCAL_STORAGE_KEY.TOKEN, token);
    this.localStorage.store(LOCAL_STORAGE_KEY.USER, user);
  }

  private clearAuthInfo(): void {
    this.localStorage.clear(LOCAL_STORAGE_KEY.TOKEN);
    this.localStorage.clear(LOCAL_STORAGE_KEY.USER);
  }
}

interface LoginModel {
  phoneNumber: string;
  password: string;
}

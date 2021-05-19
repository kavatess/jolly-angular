import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable, of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { SERVER_URL } from 'src/app/core/services/request-url-constants';
import { LOCAL_STORAGE_KEY } from '../../app-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authRequestURL = '/api/auth/login';

  constructor(private http: HttpClient, private localStorage: LocalStorageService, private router: Router) { }

  getAuthToken(): string | null {
    return this.localStorage.retrieve(LOCAL_STORAGE_KEY.TOKEN);
  }

  login(loginInfo: LoginModel): Observable<boolean> {
    return this.http.post(SERVER_URL + this.authRequestURL, loginInfo)
      .pipe(
        tap(token => this.storeToken(token)),
        mapTo(true),
        catchError(err => {
          console.log(err)
          return of(false);
        })
      );
  }

  private storeToken({ token, user }: any): void {
    this.localStorage.store(LOCAL_STORAGE_KEY.TOKEN, token);
    this.localStorage.store(LOCAL_STORAGE_KEY.USER, user);
  }

  logout(): void {
    this.localStorage.clear(LOCAL_STORAGE_KEY.TOKEN);
    this.router.navigate(['login']);
  }
}

interface LoginModel {
  phoneNumber: string;
  password: string;
}

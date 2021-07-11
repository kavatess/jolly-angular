import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request.url.includes('api/auth') && this.authService.getAuthToken()) {
            request = this.addAuthHeaderTo(request);
        }
        return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
            if (error.error instanceof ErrorEvent) {
                console.log('this is client side error');
            }
            if (error instanceof HttpErrorResponse) {
                if (error.status == 401) {
                    console.log('Unauthorized or login failed.');
                    this.authService.logout();
                }
                if (error.status == 405) {
                    console.log('Request method is not allowed.');
                }
            }
            return throwError(error);
        }));
    }

    private addAuthHeaderTo(request: HttpRequest<any>): HttpRequest<any> {
        return request.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + this.authService.getAuthToken()
            }
        });
    }
}
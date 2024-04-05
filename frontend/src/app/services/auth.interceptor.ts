import {
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap, catchError, finalize, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    let access_token;
    if (typeof window !== 'undefined') {
      access_token = localStorage.getItem('access_token');
    }
    if (access_token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      });
      request = request.clone({ headers });
    }

    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status == 401 || err.status == 403) {
          if (typeof window !== 'undefined') {
            localStorage.removeItem('access_token');
            localStorage.removeItem('auth');
            this.router.navigate(['/login']);
          }
        }
        return throwError(() => err);
      })
    );
  }
}

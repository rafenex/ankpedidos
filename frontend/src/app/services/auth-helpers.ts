import { Injectable } from '@angular/core';

@Injectable()
export class AuthHelper {
  isAuthenticated(): any {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('access_token') != null;
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterRequest } from '../interfaces/register-request';
import { LoginRequest } from '../interfaces/login-request';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private httpClient: HttpClient) {}

  signUp(registerObj: RegisterRequest): Observable<any> {
    return this.httpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      registerObj
    );
  }
  login(loginObj: LoginRequest): Observable<any> {
    return this.httpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      loginObj
    );
  }
}

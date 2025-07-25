import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RegisterRequest } from '../interfaces/register-request';
import { LoginRequest } from '../interfaces/login-request';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private httpClient: HttpClient, private router: Router) {}
  isloggedIn = new BehaviorSubject<boolean>(
    localStorage.getItem('appToken') ? true : false
  );
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
  logOut() {
    this.isloggedIn.next(false);
    localStorage.removeItem('appToken');
    this.router.navigate(['/login']);
  }
  forgetPassword(form: any): Observable<any> {
    return this.httpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',
      form
    );
  }
  verifyResetCode(form: any): Observable<any> {
    return this.httpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',
      form
    );
  }
  resetPassword(form: any): Observable<any> {
    return this.httpClient.put(
      'https://ecommerce.routemisr.com/api/v1/auth/resetPassword',
      form
    );
  }
}

import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnDestroy {
  loginSubscription!: Subscription;
  constructor(private authService: Auth, private router: Router) {}
  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
  }
  loginFormObject: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z][0-9]{3,}$/),
    ]),
  });
  responseErrMessage = '';
  isloading = false;
  handleLogin() {
    if (this.loginFormObject.valid) {
      this.isloading = true;
      //send request
      this.loginSubscription = this.authService
        .login(this.loginFormObject.value)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.router.navigate(['/home']);
          },
          error: (err) => {
            this.isloading = false;
            console.log(err);
            this.responseErrMessage = err.error.message;
          },
        });
    }
  }
}

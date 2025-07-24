import { Component, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { passwordMatch } from '../../customvalidators/passwordMatch';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp implements OnDestroy {
  //Template driven
  // handleSubmit(formObject: NgForm) {
  //   console.log(formObject.form);
  // }
  responseErrMessage = '';
  isloading = false;
  signUpSubscription!: Subscription;

  //Reactive forms
  signUpFormObj: FormGroup = new FormGroup(
    {
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z][0-9]{3,}$/),
      ]),
      rePassword: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z][0-9]{3,}$/),
      ]),
      phone: new FormControl('', [Validators.required]),
    },
    { validators: passwordMatch }
  );
  constructor(private authService: Auth, private router: Router) {}
  ngOnDestroy(): void {
    this.signUpSubscription.unsubscribe();
  }

  handleSubmit() {
    if (this.signUpFormObj.valid) {
      this.isloading = true;
      this.signUpSubscription = this.authService
        .signUp(this.signUpFormObj.value)
        .subscribe({
          next: (response) => {
            console.log(response);
            //in case of success navigate to login page
            this.isloading = false;
            this.router.navigate(['/login']);
          },
          error: (err) => {
            this.isloading = false;
            console.log(err);
            this.responseErrMessage = err.error.message;
          },
        });
    }
    // console.log(this.signUpFormObj.value);
  }
}

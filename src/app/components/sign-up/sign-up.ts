import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  //Template driven
  // handleSubmit(formObject: NgForm) {
  //   console.log(formObject.form);
  // }

  //Reactive forms
  signUpFormObj: FormGroup = new FormGroup({
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
  });
  constructor(private authService: Auth) {}
  handleSubmit() {
    this.authService.signUp(this.signUpFormObj.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
    console.log(this.signUpFormObj.value);
  }
}

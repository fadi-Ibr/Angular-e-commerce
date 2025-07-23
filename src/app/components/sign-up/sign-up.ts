import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  handleSubmit(formObject: NgForm) {
    console.log(formObject.form.value);
  }
}

import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: false,
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.css',
})
export class ForgetPassword {
  isloading: boolean = false;
  responseErrMessage: string = '';
  forgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(private authService: Auth, private router: Router) {}
  handleForget() {
    if (this.forgetPasswordForm.valid) {
      this.isloading = true;
      this.authService.forgetPassword(this.forgetPasswordForm.value).subscribe({
        next: (response) => {
          console.log('response: ', response);
          this.isloading = false;
          this.router.navigate(['/verify-code']);
        },
        error: (err) => {
          this.isloading = false;
          console.log('Error: ', err);
          this.responseErrMessage = err.error.message;
        },
      });
    }
  }
}

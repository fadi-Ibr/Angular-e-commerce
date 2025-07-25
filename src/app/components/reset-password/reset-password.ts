import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: false,
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
})
export class ResetPassword {
  responseErrMessage = '';
  isloading = false;
  resetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z][0-9]{3,}$/),
    ]),
  });
  constructor(private authService: Auth, private router: Router) {}
  handleReset() {
    if (this.resetPasswordForm.valid) {
      this.isloading = true;
      this.authService.resetPassword(this.resetPasswordForm.value).subscribe({
        next: (response) => {
          console.log('response: ', response);
          this.isloading = false;
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log('Error: ', err);
          this.isloading = false;
          this.responseErrMessage = err.error.message;
        },
      });
    }
  }
}

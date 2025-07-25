import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  standalone: false,
  templateUrl: './verify-code.html',
  styleUrl: './verify-code.css',
})
export class VerifyCode {
  responseErrMessage = '';
  isloading = false;
  verifyCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl('', Validators.required),
  });
  constructor(private authService: Auth, private router: Router) {}
  handleVerifyCode() {
    if (this.verifyCodeForm.valid) {
      this.isloading = true;
      this.authService.verifyResetCode(this.verifyCodeForm.value).subscribe({
        next: (response) => {
          console.log('response: ', response);
          this.isloading = false;
          this.router.navigate(['/reset-password']);
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

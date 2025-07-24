import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatch(
  signUpFormObj: AbstractControl
): null | ValidationErrors {
  //Compare password & rePassword
  let password = signUpFormObj.value.password;
  let rePassword = signUpFormObj.value.rePassword;
  if (password == rePassword) {
    return null;
  }
  return { passwordMissMatch: true };
}

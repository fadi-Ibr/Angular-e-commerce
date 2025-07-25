import { CanDeactivateFn } from '@angular/router';
import { SignUp } from '../components/sign-up/sign-up';

export const confirmsaveGuard: CanDeactivateFn<SignUp> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (component.signUpFormObj.dirty) {
    return window.confirm('Leave unsaved changes?');
  }
  return true;
};

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const nauthGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  if (!localStorage.getItem('appToken')) {
    return true;
  }
  router.navigate(['/home']);
  return false;
};

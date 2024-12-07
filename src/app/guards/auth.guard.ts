import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const location = inject(Location);

  const userLogin = localStorage.getItem('userLogin');

  if (userLogin) {
    return false;
  }

  return true;
};

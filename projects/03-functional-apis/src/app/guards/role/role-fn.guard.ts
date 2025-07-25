import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../../services/auth.service';

export const roleFnGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService); // Inject services directly (New API)
  const router = inject(Router);
  const requiredRole = route.data['requiredRole']; // Access route data

  if (authService.isLoggedIn() && authService.getUserRole() === requiredRole) {
    return true; // User has required role, allow access
  } else {
    // User doesn't have the role or isn't logged in, redirect
    return router.createUrlTree(['/login']);
  }
};

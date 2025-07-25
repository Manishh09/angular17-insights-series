import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
 
export const authFnInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn):  Observable<HttpEvent<unknown>> => {
  const authService = inject(AuthService); // Inject services directly
  const token = authService.getToken();

  // Clone the request to add the authorization header
  const authReq = req.clone({
    setHeaders: { Authorization: `Bearer ${token}` }
  });

  return next(authReq); // Pass the modified request to the next handler
};
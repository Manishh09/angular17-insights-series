import { HttpInterceptorFn } from '@angular/common/http';

export const functionalInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

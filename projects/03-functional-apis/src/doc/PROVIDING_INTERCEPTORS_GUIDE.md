# Providing Class-based and Functional Interceptors in Angular

Angular supports both class-based and functional HTTP interceptors. This guide explains how to provide them in **module-based** and **standalone** applications.

---

## 1. Class-based Interceptors

### a. Module-based Apps

1. **Create the Interceptor:**

   ```typescript
   import { Injectable } from "@angular/core";
   import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
   import { Observable } from "rxjs";

   @Injectable()
   export class MyClassInterceptor implements HttpInterceptor {
     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       // Intercept logic here
       return next.handle(req);
     }
   }
   ```

2. **Provide in Module:**

   ```typescript
   import { HTTP_INTERCEPTORS } from "@angular/common/http";

   @NgModule({
     providers: [
       {
         provide: HTTP_INTERCEPTORS,
         useClass: MyClassInterceptor,
         multi: true,
       },
     ],
   })
   export class AppModule {}
   ```

---

### b. Standalone Apps

1. **Provide in `providers` Array:**

   ```typescript
   import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

   bootstrapApplication(AppComponent, {
     providers: [
       provideHttpClient(withInterceptorsFromDi()),
       {
         provide: HTTP_INTERCEPTORS,
         useClass: MyClassInterceptor,
         multi: true,
       },
     ],
   });
   ```

---

## 2. Functional Interceptors

### a. Module-based Apps

1. **Define the Functional Interceptor:**

   ```typescript
   import { HttpInterceptorFn } from "@angular/common/http";

   export const myFunctionalInterceptor: HttpInterceptorFn = (req, next) => {
     // Intercept logic here
     return next(req);
   };
   ```

2. **Provide in Module:**

   ```typescript
   import { provideHttpClient, withInterceptors } from "@angular/common/http";

   @NgModule({
     providers: [provideHttpClient(withInterceptors([myFunctionalInterceptor]))],
   })
   export class AppModule {}
   ```

---

### b. Standalone Apps

1. **Provide in `providers` Array:**

   ```typescript
   import { provideHttpClient, withInterceptors } from "@angular/common/http";

   bootstrapApplication(AppComponent, {
     providers: [provideHttpClient(withInterceptors([myFunctionalInterceptor]))],
   });
   ```

---

## Summary Table

| Approach    | Module-based App                             | Standalone App                                          |
| ----------- | -------------------------------------------- | ------------------------------------------------------- |
| Class-based | `HTTP_INTERCEPTORS` in `@NgModule.providers` | `HTTP_INTERCEPTORS` in `bootstrapApplication.providers` |
| Functional  | `provideHttpClient(withInterceptors([...]))` | `provideHttpClient(withInterceptors([...]))`            |

---

## References

- [Angular Interceptors Documentation](https://angular.dev/guide/http#intercepting-all-requests-or-responses)
- [Functional Interceptors in Angular](https://angular.dev/guide/http#functional-interceptors)

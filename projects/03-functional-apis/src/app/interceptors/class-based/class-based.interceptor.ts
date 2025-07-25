import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';


// Generic Class-Based Interceptor Code Snippet
@Injectable({
    providedIn: 'root'
})
export class ClassBasedInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(
        req: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {

        // Add Authorization header logic

        // Replace with real token logic

        // clone request logic

        return next.handle(req);
    }
}

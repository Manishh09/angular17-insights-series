import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

// Generic Guard Code Snippet
@Injectable({
  providedIn: 'root'
})
export class ClassBasedGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    
    // logic goes here

     
    return this.router.createUrlTree(['/login']);
  }
}
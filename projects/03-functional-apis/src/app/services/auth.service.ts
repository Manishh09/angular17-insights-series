import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor() { }
  getToken() {
    return 'auth_token';
  }
  getUserRole() {
      return 'admin';
  }
  isLoggedIn() {
      return true;
  }
}

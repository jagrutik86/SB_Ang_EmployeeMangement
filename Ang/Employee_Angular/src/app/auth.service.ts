import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Simulate a simple login logic (replace with your actual authentication logic)
  login(username: string, password: string): boolean {
    if (username === 'user' && password === 'password') {
      // Successful login
      localStorage.setItem('currentUser', JSON.stringify({ username }));
      return true;
    }
    return false;
  }

  // Logout the user
  logout(): void {
    localStorage.removeItem('currentUser');
  }
  // Check if the user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

}

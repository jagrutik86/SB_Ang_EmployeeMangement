// signup.service.ts
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  //private apiUrl = "/employees"; // Replace with your actual API endpoint

  //constructor(private http: HttpClient) {}

  //signup(userData: any): Observable<any> {
    // Assuming your backend API endpoint for user registration is /signup
    //const signupUrl = `${this.apiUrl}/signup`;
    //return this.http.post(signupUrl, userData);
  //}
//}
constructor() { }

// Simulate a simple login logic (replace with your actual authentication logic)
login(username: string, password: string): boolean {
  if (username === 'user' &&  password === 'password' ) {
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

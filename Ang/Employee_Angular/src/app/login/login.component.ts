import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    if (this.authService.login(this.username, this.password)) {     
      // Successful login, navigate to the home page
      // You will need to import Router and inject it into the constructor
      // Then use router.navigate(['/home']) to navigate.
      alert( 'Login Succesful ');
      //this['router'].navigate(['/home']);
      this['router'].navigate(['/employees']);
      //path:'employees',component:EmployeeListComponent
    } else {
      // Failed login
      alert( 'Invalid credentials');
    }
  }
}

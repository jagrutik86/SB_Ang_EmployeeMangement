// signup.component.ts
import { Component } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './signup.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  //signupForm: FormGroup;

  //constructor(private formBuilder: FormBuilder, private signupService: SignupService) {
    //this.signupForm = this.formBuilder.group({
      //firstname: ['', Validators.required],
      //lastname: ['', Validators.required],
      //email: ['', [Validators.required, Validators.email]],
    //});
  //}

  //onSubmit() {
    //if (this.signupForm.valid) {
      //const userData = this.signupForm.value;
      //this.signupService.signup(userData).subscribe(
        //response => {
          // Handle successful registration
          //console.log('User registered successfully:', response);
        //},
        //error => {
          // Handle registration error
          //console.error('Registration failed:', error);
        //}
      //);
    //}
  //}
//}
username: string = '';
password: string = '';

constructor(private authService: SignupService, private router: Router) { }

login(): void {
  if (this.authService.login(this.username, this.password)) {     
    // Successful login, navigate to the home page
    // You will need to import Router and inject it into the constructor
    // Then use router.navigate(['/home']) to navigate.
    alert( ' Succesfully Registered! ');
    //this['router'].navigate(['/home']);
    this['router'].navigate(['/employees']);
    //path:'employees',component:EmployeeListComponent
  } else {
    // Failed login
    alert( 'Invalid credentials');
  }
}
}


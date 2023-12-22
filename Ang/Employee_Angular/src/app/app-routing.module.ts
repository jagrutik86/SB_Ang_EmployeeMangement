/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path:'employees',component:EmployeeListComponent
  },
  {
     path:'create-employee',component:CreateEmployeeComponent
  },
  /*
  {
    path:'',redirectTo:'employees',pathMatch:'full'
  },*/
  {
    path:'update-employee/:id',component:UpdateEmployeeComponent
  },
  {
    path:'employee-details/:id',component:EmployeeDetailsComponent
  },

  { path: 'login',component: LoginComponent
  },
  { path: 'signup',component:SignupComponent}
    

   /* { path: 'home', component: HomeComponent },*/
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

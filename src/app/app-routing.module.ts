import { Component, NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [

  { path:'', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'layout', component: LayoutComponent },
  { path:'login', component: LoginComponent },
  { path:'forget-password', component: ForgetPasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

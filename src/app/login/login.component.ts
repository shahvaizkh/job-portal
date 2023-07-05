import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginUser(item: any){
    console.warn(item);

    let data = {name:"", password:""};
    localStorage.setItem('session', JSON.stringify(data) )

  }

  constructor( 
    private router: Router
    
    ) {}

  name = "Shahvaiz Khan"

  // routeToRegister() {
  //   this.router.navigate(['register'])
  // }

}

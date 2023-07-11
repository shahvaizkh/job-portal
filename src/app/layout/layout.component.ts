import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  data:any;

  constructor(private router: Router ) {
    this.data = localStorage.getItem('item');
    this.data = JSON.parse(this.data)
    console.log(this.data)
  }
  
  logout(){
    localStorage.clear()
    this.router.navigate(['login'])
  }
}

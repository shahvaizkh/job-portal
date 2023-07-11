import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  name = 'Shahvaiz Khan';

  constructor(private router: Router) {}

  loginUser(item: any) {
    console.warn(item);
    localStorage.setItem('item', JSON.stringify(item))
    this.router.navigate(['layout'])
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    localStorage.setItem('item', JSON.stringify(item));
    this.router.navigate(['layout']);
  }
}





// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })

// export class LoginComponent implements OnInit {
//   // This FormGroup contains fullName and Email form controls
//   loginForm: FormGroup;
//     name = 'Shahvaiz Khan';

//   constructor(
//     private fb: FormBuilder,
//     private router: Router
//   ) {
//     this.loginForm = this.fb.group({
//       name: ['', Validators.required],
//       password: ['', Validators.required],

//     })
//   }

//   ngOnInit() {}

//     loginUser(item: any) {
//     console.warn(item);
//     localStorage.setItem('item', JSON.stringify(item))
//     this.router.navigate(['layout'])
//   }

// }

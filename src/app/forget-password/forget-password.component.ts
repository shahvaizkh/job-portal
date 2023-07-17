import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  myForm!: FormGroup;
  router: Router = new Router();

  constructor(private formBuilder: FormBuilder) {}

  forgetUser(item: any) {
    console.warn(item);
    localStorage.setItem('item', JSON.stringify(item));
    this.router.navigate(['layout']);
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      new_password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      // You can perform further actions with the form data here
    }
  }
}

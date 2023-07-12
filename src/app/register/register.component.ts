import { Component, NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ]
});

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerUser(item: any) {
    console.warn(item);
    localStorage.setItem('session', JSON.stringify(item));
  }

}

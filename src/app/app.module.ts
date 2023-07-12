
import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JobPostingComponent } from './job-posting/job-posting.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { RegisterComponent } from './register/register.component';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JobPostingComponent,
    AllJobsComponent,
    RegisterComponent,
    LayoutComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormControl,
    FormGroup,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from '../app-routing.module';
import {MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class LoginModule { }

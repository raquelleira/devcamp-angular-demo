import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing';

@NgModule({
    declarations: [LoginComponent],
    imports: [
      CommonModule,
      LoginRoutingModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule
    ]
})
export class LoginModule { }

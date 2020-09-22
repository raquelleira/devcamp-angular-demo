import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { ClienteFormComponent } from './cliente-form.component';
import { ClienteFormRoutingModule } from './cliente-form-routing';


@NgModule({
  declarations: [ClienteFormComponent],
  imports: [
    CommonModule,
    ClienteFormRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ClienteFormModule { }

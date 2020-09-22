import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

import { ClienteComponent } from './cliente.component';
import { ClienteRoutingModule } from './cliente-routing';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteApiService } from './services/cliente-api.service';


@NgModule({
  declarations: [ClienteComponent, ClienteListComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [
    ClienteApiService
  ]
})
export class ClienteModule { }

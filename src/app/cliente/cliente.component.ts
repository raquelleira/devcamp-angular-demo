import { Component, OnInit } from '@angular/core';
import { ClienteApiService } from './services/cliente-api.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor(
    private clienteApiService: ClienteApiService
  ) { }

  ngOnInit(): void {
    this.clienteApiService.getCliente();
    this.clienteApiService.getClientes();
  }

}

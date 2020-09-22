import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cliente } from '../../models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';


@Injectable({
  providedIn: 'root'
})
export class ClienteApiService {

  private clientes: Cliente[];

  constructor(
    private httpClient: HttpClient,
    private clienteService: ClienteService
  ) { }


  public getCliente(): void {
    this.httpClient.get<Cliente>('assets/json/cliente.json')
        .toPromise()
        .then(cliente => this.clienteService.atualizarCliente(cliente));
  }

  public getClientes(): void {
    this.httpClient.get<Cliente[]>('assets/json/clientes.json')
        .toPromise()
        .then(clientes => {
          this.clientes = clientes;
          this.clienteService.atualizarClientes(this.clientes);
        });
  }

  public postCliente(cliente: Cliente): void {
    this.clientes?.push(cliente);
    this.clienteService.atualizarClientes(this.clientes);
  }

  public putCliente(cliente: Cliente): void {
    const clienteArray = this.clientes?.find(cli => cli.id === cliente.id);
    clienteArray.nome = cliente.nome;
    clienteArray.email = cliente.email;
    clienteArray.endereco = cliente.endereco;
    clienteArray.phone = cliente.phone;
    this.clienteService.atualizarClientes(this.clientes);
    if (cliente.id === '1') {
      this.clienteService.atualizarCliente(cliente);
    }
  }

  public getClientesObservable(): Observable<Cliente[]> {
      return this.httpClient.get<Cliente[]>('assets/json/clientes.json');
  }
}

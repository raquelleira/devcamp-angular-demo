import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public cliente$: Observable<Cliente>;
  public clientes$: Observable<Cliente[]>;

  private cliente: BehaviorSubject<Cliente> = new BehaviorSubject<Cliente>(null);
  private clientes: BehaviorSubject<Cliente[]> = new BehaviorSubject<Cliente[]>(null);

  constructor() {
    this.cliente$ = this.cliente.asObservable();
    this.clientes$ = this.clientes.asObservable();
  }

  public atualizarCliente(cliente: Cliente): void {
    this.cliente.next(cliente);
  }

  public atualizarClientes(clientes: Cliente[]): void {
    this.clientes.next(clientes);
  }

}

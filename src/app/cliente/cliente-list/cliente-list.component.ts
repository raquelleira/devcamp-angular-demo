import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit, OnDestroy {

  public clientes: Cliente[];
  private subscriptionDestroyer: Subject<null> = new Subject();

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.clienteService.clientes$
      .pipe(
        takeUntil(this.subscriptionDestroyer)
      )
      .subscribe(clientes => {
        this.clientes = clientes;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionDestroyer.next();
    this.subscriptionDestroyer.complete();
  }

  criarCliente(): void {
    this.router.navigate(['cliente-form', 0], {relativeTo: this.route});
  }

  editarCliente(cliente: Cliente): void {
    this.router.navigate(['cliente-form', cliente.id], {relativeTo: this.route});
  }

}

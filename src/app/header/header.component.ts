import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public cliente: Cliente = null;
  private subscriptionDestroyer: Subject<null> = new Subject();

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.clienteService.cliente$
      .pipe(
        takeUntil(this.subscriptionDestroyer)
      )
      .subscribe(cliente => {
        this.cliente = cliente;
    });
  }

  sair(): void {
    this.cliente = null;
  }

  ngOnDestroy(): void {
    this.subscriptionDestroyer.next();
    this.subscriptionDestroyer.complete();
}

}

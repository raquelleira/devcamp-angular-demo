import { Injectable } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteFormService {

  constructor(
    private clienteService: ClienteService,
  ) { }
}

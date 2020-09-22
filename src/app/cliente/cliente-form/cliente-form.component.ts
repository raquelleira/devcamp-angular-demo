import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../models/cliente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { ClienteApiService } from '../services/cliente-api.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss'],
  providers: [FormBuilder]
})
export class ClienteFormComponent implements OnInit {

  public form: FormGroup;
  public cliente: Cliente;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private clienteApiService: ClienteApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const clienteId = this.route.snapshot.paramMap.get('id');
    if (clienteId !== '0') {
      this.clienteService.clientes$
      .subscribe(clientes => {
        if (clientes) {
          this.cliente = clientes.find(cliente => cliente.id === clienteId);
          this.form = this.buildForm(this.cliente);
        }
      });
    } else {
      this.form = this.buildForm(new Cliente({}));
    }
  }

  salvar(): void{
    const cliente = this.form.getRawValue();
    if (cliente.id) {
      this.clienteApiService.putCliente(cliente);
      this.router.navigate(['cliente']);
    } else {
      this.clienteApiService.postCliente(cliente);
      this.router.navigate(['cliente']);
    }
  }

  cancelar(): void {
    this.router.navigate(['cliente']);
  }

  private buildForm(cliente: Cliente): FormGroup {
    return this.formBuilder.group({
      id: [cliente.id],
      email: [cliente.email, Validators.required],
      nome: [cliente.nome, Validators.required],
      endereco: [cliente.endereco],
      phone: [cliente.phone]
    });
  }

}

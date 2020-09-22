import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente.component';

const routes: Routes = [
    {
      path: '',
      component: ClienteComponent,
      children: [
        {
          path: 'cliente-form',
          loadChildren: () => import('./cliente-form/cliente-form.module').then(m => m.ClienteFormModule)
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }

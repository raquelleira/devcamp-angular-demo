import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
      path: 'cliente',
      loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

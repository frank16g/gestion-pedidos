import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientesListarProductosComponent } from './components/clientes-listar-productos/clientes-listar-productos.component';


const routes: Routes = [
  {path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, 
  {path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'listarProductos',
    component: ClientesListarProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

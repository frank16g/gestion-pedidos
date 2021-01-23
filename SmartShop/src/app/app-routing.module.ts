import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ClientePedidosRealizadosComponent } from './components/cliente-pedidos-realizados/cliente-pedidos-realizados.component';
import {ProductsComponent} from './components/products/products.component'
import { ProductsCrudComponent } from './components/products-crud/products-crud.component'

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, 
  {path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cliente',
    component: PedidosComponent
  },
  {
    path: 'pedidosRealizados',
    component: ClientePedidosRealizadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

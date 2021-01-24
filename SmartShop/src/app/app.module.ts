import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ClientesListarProductosComponent } from './components/clientes-listar-productos/clientes-listar-productos.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientePedidosRealizadosComponent } from './components/cliente-pedidos-realizados/cliente-pedidos-realizados.component';
<<<<<<< HEAD

import { ProductsComponent } from './components/products/products.component';

=======
import { HttpClientModule } from '@angular/common/http';
import { NavbarLoginComponent } from './auth/navbar-login/navbar-login.component';
import { ProductsComponent } from './components/products/products.component';
>>>>>>> parent of 418bd23... restart
import { FormsModule } from '@angular/forms';
import { ProductsCrudComponent } from './components/products-crud/products-crud.component';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AuthService} from '../app/auth/services/auth.service'; 
import { CheckLoginGuard } from './guards/check-login.guard';
import { RepartidorPedidosNuevosComponent } from './components/repartidor-pedidos-nuevos/repartidor-pedidos-nuevos.component';
import { RepartidorPedidosRealizadosComponent } from './components/repartidor-pedidos-realizados/repartidor-pedidos-realizados.component';
import { NavbarRepartidoresComponent } from './components/navbar-repartidores/navbar-repartidores.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { AdminRepartidoresComponent } from './components/admin-repartidores/admin-repartidores.component';
<<<<<<< HEAD
=======
import { AdminCrearRepartidorComponent } from './components/admin-crear-repartidor/admin-crear-repartidor.component';


>>>>>>> parent of 418bd23... restart

@NgModule({
  declarations: [
    AppComponent,
    ClientesListarProductosComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PedidosComponent,
    NavbarComponent,
    ClientePedidosRealizadosComponent,
<<<<<<< HEAD
=======

    NavbarLoginComponent,
    

>>>>>>> parent of 418bd23... restart
    ProductsComponent,
    ProductsCrudComponent,
    RepartidorPedidosNuevosComponent,
    RepartidorPedidosRealizadosComponent,
    NavbarRepartidoresComponent,
    AdminHomeComponent,
    NavbarAdminComponent,
<<<<<<< HEAD
    AdminRepartidoresComponent
=======
    AdminRepartidoresComponent,
    AdminCrearRepartidorComponent

>>>>>>> parent of 418bd23... restart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
=======

    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,

>>>>>>> parent of 418bd23... restart
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
<<<<<<< HEAD
  providers: [CheckLoginGuard],//AuthService,CheckLoginGuard
=======
  providers: [],//AuthService,CheckLoginGuard
>>>>>>> parent of 418bd23... restart
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { HttpClientModule } from '@angular/common/http';
import { NavbarLoginComponent } from './auth/navbar-login/navbar-login.component';

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
    NavbarLoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

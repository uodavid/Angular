import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    ClientesComponent,
    ContactoComponent,
    LoginComponent,
    PedidosComponent,
    ProductosComponent,
    UsuariosComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

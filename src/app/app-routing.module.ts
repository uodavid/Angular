import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { privateRoutesGuard } from './guards/private-routes.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent 
  },
  {
    path: 'app',
    component: MainLayoutComponent,
    canActivate: [privateRoutesGuard],
    children: [
      {
        path: 'categorias',
        component: CategoriasComponent,
      },
      {
        path: 'clientes',
        component: ClientesComponent 
      },
      {
        path: 'contacto',
        component: ContactoComponent 
      },
      {
        path: 'pedidos',
        component: PedidosComponent 
      },
      {
        path: 'productos',
        component: ProductosComponent 
      },
      {
        path: 'usuarios',
        component: UsuariosComponent 
      },
      {
        path: 'lifecycle',
        component: LifecycleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

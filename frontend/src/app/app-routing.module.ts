import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { CategoriaComponent } from './layout/categoria/categoria.component';
import { ProdutoComponent } from './layout/produto/produto.component';
import { PedidoComponent } from './layout/pedido/pedido.component';
import { ClienteComponent } from './layout/cliente/cliente.component';
import { FormularioPedidoComponent } from './layout/formulario-pedido/formulario-pedido.component';
import { LoginComponent } from './layout/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categorias', component: CategoriaComponent },
  { path: 'produtos', component: ProdutoComponent },
  { path: 'pedidos', component: PedidoComponent },
  { path: 'clientes', component: ClienteComponent },
  { path: 'pedido-detalhado/:id', component: FormularioPedidoComponent },
  { path: 'novo-pedido', component: FormularioPedidoComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

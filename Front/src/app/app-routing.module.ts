import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoComponent } from './layouts/pedido/pedido.component';
import { ProdutoComponent } from './layouts/produto/produto.component';

const routes: Routes = [
  { path: 'pedidos', component: PedidoComponent },
  { path: 'produtos', component: ProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

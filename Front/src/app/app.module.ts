import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { PedidoComponent } from './layouts/pedido/pedido.component';
import { ListaPedidosComponent } from './components/pedido/lista-pedidos/lista-pedidos.component';
import { TableModule } from 'primeng/table';
import { NovoPedidoComponent } from './components/pedido/novo-pedido/novo-pedido.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent,
    ListaPedidosComponent,
    NovoPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    TableModule,
    DropdownModule,
    ReactiveFormsModule, 
    FormsModule,
    InputNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

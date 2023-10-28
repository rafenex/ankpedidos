import { LOCALE_ID, NgModule } from '@angular/core';
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
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { PaginatorModule } from 'primeng/paginator';
import { SliderModule } from 'primeng/slider';
import { ProdutoComponent } from './layouts/produto/produto.component';
import { NovoProdutoComponent } from './components/produto/novo-produto/novo-produto.component';
import { DialogModule } from 'primeng/dialog';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent,
    ListaPedidosComponent,
    NovoPedidoComponent,
    ProdutoComponent,
    NovoProdutoComponent,
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
    InputNumberModule,
    InputTextModule,
    HttpClientModule,
    AccordionModule,
    ToastModule,
    PaginatorModule,
    SliderModule,
    DialogModule,
    PaginatorModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}

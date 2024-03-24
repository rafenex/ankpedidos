import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { CategoriaComponent } from './layout/categoria/categoria.component';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { NovaCategoriaComponent } from './components/categoria/nova-categoria/nova-categoria.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './layout/produto/produto.component';
import { NovoProdutoComponent } from './components/produto/novo-produto/novo-produto.component';
import { PedidoComponent } from './layout/pedido/pedido.component';
import { ClienteComponent } from './layout/cliente/cliente.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { NovoClienteComponent } from './components/cliente/novo-cliente/novo-cliente.component';
import { FormularioPedidoComponent } from './layout/pedido/formulario-pedido/formulario-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoriaComponent,
    NovaCategoriaComponent,
    ProdutoComponent,
    NovoProdutoComponent,
    PedidoComponent,
    ClienteComponent,
    NovoClienteComponent,
    FormularioPedidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    MenubarModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextModule,
    ConfirmDialogModule,
    ToastModule,
    CommonModule,
    DropdownModule,
    InputNumberModule,
    FormsModule,
  ],
  providers: [
    ConfirmationService,
    MessageService,
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

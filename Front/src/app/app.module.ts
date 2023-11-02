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
import { ConfirmationService, MessageService } from 'primeng/api';
import { PaginatorModule } from 'primeng/paginator';
import { SliderModule } from 'primeng/slider';
import { ProdutoComponent } from './layouts/produto/produto.component';
import { NovoProdutoComponent } from './components/produto/novo-produto/novo-produto.component';
import { DialogModule } from 'primeng/dialog';
import { CarouselModule } from 'primeng/carousel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DeleteDialogComponent } from './components/utils/delete-dialog/delete-dialog.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LoadingComponent } from './components/utils/loading/loading.component';
import { GalleriaModule } from 'primeng/galleria';
import { GaleriaComponent } from './components/utils/galeria/galeria.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent,
    ListaPedidosComponent,
    NovoPedidoComponent,
    ProdutoComponent,
    NovoProdutoComponent,
    DeleteDialogComponent,
    LoadingComponent,
    GaleriaComponent,
  ],
  imports: [
    ButtonModule,
    BrowserModule,
    AppRoutingModule,
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
    CarouselModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    GalleriaModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    MessageService,
    ConfirmationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

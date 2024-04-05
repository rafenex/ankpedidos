import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthHelper } from '../../interceptors/auth-helpers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  items: MenuItem[] | undefined = [
    {
      label: 'Categorias',
      icon: 'pi pi-fw pi-file',
      routerLink: 'categorias',
    },
    {
      label: 'Produtos',
      icon: 'pi pi-fw pi-pencil',
      routerLink: 'produtos',
    },
    {
      label: 'Clientes',
      icon: 'pi pi-fw pi-user',
      routerLink: 'clientes',
    },
    {
      label: 'Pedidos',
      icon: 'pi pi-fw pi-calendar',
      routerLink: 'pedidos',
    },

    {
      label: 'Login',
      icon: 'pi pi-fw pi-power-off',
      routerLink: 'login',
    },
  ];
}

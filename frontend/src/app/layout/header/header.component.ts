import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthHelper } from '../../services/auth-helpers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private authHelper: AuthHelper) {}
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
    this.authHelper.isAuthenticated()
      ? {
          label: 'Logout',
          icon: 'pi pi-fw pi-power-off',
          command: () => {
            this.logout();
          },
        }
      : {
          label: 'Login',
          icon: 'pi pi-fw pi-power-off',
          routerLink: 'login',
        },
  ];

  logout(): void {
    if (window.confirm('Deseja realmente sair do sistema?')) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('access_token');

        window.location.href = '/login';
      }
    }
  }
}

import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front';
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
       
        {
            label: 'Pedidos',
            icon: 'pi pi-fw pi-pencil',
            routerLink: '/pedidos'
        },
    
    ];
}
}

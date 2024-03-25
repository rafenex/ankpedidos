import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoItemPedidoComponent } from './novo-item-pedido.component';

describe('NovoItemPedidoComponent', () => {
  let component: NovoItemPedidoComponent;
  let fixture: ComponentFixture<NovoItemPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovoItemPedidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovoItemPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

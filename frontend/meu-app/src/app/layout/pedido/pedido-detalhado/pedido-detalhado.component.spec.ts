import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoDetalhadoComponent } from './pedido-detalhado.component';

describe('PedidoDetalhadoComponent', () => {
  let component: PedidoDetalhadoComponent;
  let fixture: ComponentFixture<PedidoDetalhadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PedidoDetalhadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PedidoDetalhadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

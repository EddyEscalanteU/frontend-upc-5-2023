import { TestBed } from '@angular/core/testing';

import { CarritoCompraService } from './carrito-compra.service';

describe('CarritoCompraService', () => {
  let service: CarritoCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

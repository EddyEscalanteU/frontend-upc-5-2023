import { TestBed } from '@angular/core/testing';

import { HproductoService } from './hproducto.service';

describe('HproductoService', () => {
  let service: HproductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HproductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

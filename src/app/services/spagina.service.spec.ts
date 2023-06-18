import { TestBed } from '@angular/core/testing';

import { SPaginaService } from './spagina.service';

describe('SPaginaService', () => {
  let service: SPaginaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SPaginaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

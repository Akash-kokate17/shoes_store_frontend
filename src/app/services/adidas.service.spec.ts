import { TestBed } from '@angular/core/testing';

import { AdidasService } from './adidas.service';

describe('AdidasService', () => {
  let service: AdidasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdidasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PumaService } from './puma.service';

describe('PumaService', () => {
  let service: PumaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PumaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

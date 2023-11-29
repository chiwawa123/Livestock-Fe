import { TestBed } from '@angular/core/testing';

import { RegServiceeService } from './reg-servicee.service';

describe('RegServiceeService', () => {
  let service: RegServiceeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegServiceeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

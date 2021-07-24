import { TestBed } from '@angular/core/testing';

import { ArrayMethodService } from './array-method.service';

describe('ArrayMethodService', () => {
  let service: ArrayMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

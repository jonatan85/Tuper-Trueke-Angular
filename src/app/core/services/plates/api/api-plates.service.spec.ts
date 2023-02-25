import { TestBed } from '@angular/core/testing';

import { ApiPlatesService } from './api-plates.service';

describe('ApiPlatesService', () => {
  let service: ApiPlatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPlatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

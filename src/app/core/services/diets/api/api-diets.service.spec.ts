import { TestBed } from '@angular/core/testing';

import { ApiDietsService } from './api-diets.service';

describe('ApiDietsService', () => {
  let service: ApiDietsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDietsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

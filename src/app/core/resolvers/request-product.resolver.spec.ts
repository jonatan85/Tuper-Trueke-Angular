import { TestBed } from '@angular/core/testing';

import { RequestProductResolver } from './request-product.resolver';

describe('RequestProductResolver', () => {
  let resolver: RequestProductResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RequestProductResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

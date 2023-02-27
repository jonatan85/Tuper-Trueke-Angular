import { TestBed } from '@angular/core/testing';

import { ExitRegisterGuard } from './exit-register.guard';

describe('ExitRegisterGuard', () => {
  let guard: ExitRegisterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExitRegisterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

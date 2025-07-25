import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { functionalGuard } from './functional.guard';

describe('authFnGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => functionalGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

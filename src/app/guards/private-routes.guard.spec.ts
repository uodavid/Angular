import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { privateRoutesGuard } from './private-routes.guard';

describe('privateRoutesGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => privateRoutesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});


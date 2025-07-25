import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ClassBasedGuard } from './class-based.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('ClassBasedGuard', () => {
  let guard: ClassBasedGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [ClassBasedGuard]
    });
    guard = TestBed.inject(ClassBasedGuard);
    router = TestBed.inject(Router);
  });

  it('should create the guard', () => {
    expect(guard).toBeTruthy();
  });

});

import { TestBed } from '@angular/core/testing';
import { Router, UrlTree } from '@angular/router';
 import { AuthService } from '../../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
    let guard: AuthGuard;
    let authService: jasmine.SpyObj<AuthService>;
    let router: Router;

    beforeEach(() => {
        const authServiceSpy = jasmine.createSpyObj('AuthService', ['isLoggedIn']);

        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([])],
            providers: [
                AuthGuard,
                { provide: AuthService, useValue: authServiceSpy }
            ]
        });

        guard = TestBed.inject(AuthGuard);
        authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
        router = TestBed.inject(Router);
    });

    afterEach(() => {
        authService.isLoggedIn.calls.reset();
    });
    xit('should allow activation if user is logged in', () => {
        authService.isLoggedIn.and.returnValue(true);

        const result = guard.canActivate({} as any, {} as any);

        expect(result).toBeTrue();
        expect(authService.isLoggedIn).toHaveBeenCalled();
    });

    xit('should redirect to /login if user is not logged in', () => {
        authService.isLoggedIn.and.returnValue(false);

        const result = guard.canActivate({} as any, {} as any);

        expect(result).toBeInstanceOf(UrlTree);
        expect((result as UrlTree).toString()).toContain('/login');
        expect(authService.isLoggedIn).toHaveBeenCalled();
    });
});

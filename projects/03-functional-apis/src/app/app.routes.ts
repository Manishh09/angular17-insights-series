import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { roleFnGuard } from './guards/role/role-fn.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard] // Reference the class
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [roleFnGuard], // Reference the function directly
        data: { requiredRole: 'admin' } // Pass required role via route data
    }
];

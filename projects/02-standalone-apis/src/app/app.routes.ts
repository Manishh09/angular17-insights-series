import { Routes } from '@angular/router';
import { HeroListComponent } from './components/hero-list/hero-list.component';

export const routes: Routes = [
    // {
    //     path: 'hero-list',
    //     component: HeroListComponent
    // }

    // lazy load hero-list component
    {
        path: 'hero-list',
        loadComponent: () => import('./components/hero-list/hero-list.component').then(c => c.HeroListComponent)
    }
];

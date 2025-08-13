import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent() {
            return import('./home/home').then(m => m.Home);
        },
    },
    {
        path: 'about',
        pathMatch: 'full',
        loadComponent() {
            return import('./about/about').then(m => m.About);
        },
    }
];

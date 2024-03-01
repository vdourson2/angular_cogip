import { Routes } from '@angular/router';

export const dataRoutes: Routes = [
    {
        path:'company/:id', 
        loadComponent: () => import('./company-details/company-details.component').then(module => module.CompanyDetailsComponent),
    }
];
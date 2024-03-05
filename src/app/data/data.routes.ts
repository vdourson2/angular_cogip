import { Routes } from '@angular/router';

export const dataRoutes: Routes = [{
    path:'',
    children:[
        {
            path:'company/add',
            loadComponent:() => import('./add-company/add-company.component').then(module => module.AddCompanyComponent),        
        },
        {
            path:'company/:id', 
            loadComponent: () => import('./company-details/company-details.component').then(module => module.CompanyDetailsComponent),
        },
        {
            path:'companies',
            loadComponent: () => import('./company-list/company-list.component').then(module => module.CompanyListComponent),
        },
    ]
}];


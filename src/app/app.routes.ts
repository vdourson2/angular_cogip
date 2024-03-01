import { Routes } from '@angular/router';
import { CompanyListComponent } from './data/company-list/company-list.component';

export const routes: Routes = [
    {
        path:'', component: CompanyListComponent
    },
    {
        path:'',
        loadChildren: () => import('./data/data.routes').then(module => module.dataRoutes)
    }
];

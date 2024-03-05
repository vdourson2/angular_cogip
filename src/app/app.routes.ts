import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'companies', 
        pathMatch: 'full' 
    
    },
    {
        path:'',
        loadChildren: () => import('./data/data.routes').then(module => module.dataRoutes)
    }
];

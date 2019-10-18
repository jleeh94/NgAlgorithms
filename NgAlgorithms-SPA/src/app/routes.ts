import { Routes } from '@angular/router';
import { SortingComponent } from './sorting/sorting.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        children: [
            { path: 'sorting', component: SortingComponent },
        ]
    },

    { path: '**', redirectTo: '', pathMatch: 'full'}
];

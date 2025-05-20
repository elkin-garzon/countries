import { Routes } from '@angular/router';
import { BaseComponent } from './layouts/base/base.component';

export const routes: Routes = [
    {
        path: '',
        component: BaseComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./modules/list/list.component').then(c => c.ListComponent),
            },
            {
                path: 'detail/:code',
                loadComponent: () => import('./modules/detail/detail.component').then(c => c.DetailComponent),
            },
        ]
    }
];

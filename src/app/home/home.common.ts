import { Routes } from '@angular/router';

import { BaseLayoutComponent } from '@big-trip/layouts';

import { HomeComponent } from './containers/home/home.component';

export const homeContainers: any[] = [HomeComponent];

export const homeRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

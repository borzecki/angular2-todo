import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { TodoComponent } from './todo.component';

export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

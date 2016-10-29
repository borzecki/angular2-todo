import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { TodoComponent } from './todo.component';

const appRoutes: Routes = [
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

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import type { Routes } from '@angular/router';

//TODO: Add module export once feature is ready
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'auth',
  },
  {
    path: 'home',
  },
  {
    path: 'library',
  },
  {
    path: 'wallet',
  },
  {
    path: 'about',
  },
  {
    path: 'profile',
  },
  {
    path: '**',
  },
];

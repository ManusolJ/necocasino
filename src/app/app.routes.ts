import type { Routes } from '@angular/router';

import { authGuard } from '@core/guards/auth-guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('@features/auth-page/auth-page').then((mod) => mod.Auth),
  },
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () => import('@layout/lobby/lobby.routes').then((mod) => mod.LOBBY_ROUTES),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

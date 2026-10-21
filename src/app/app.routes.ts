import type { Routes } from '@angular/router';

import { authGuard } from '@core/guards/auth-guard';

//TODO: Add module export once feature is ready
export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('@features/auth-page/auth').then((mod) => mod.Auth),
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

import type { Routes } from '@angular/router';

export const LOBBY_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('@layout/lobby/lobby').then((mod) => mod.Lobby),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadComponent: () => import('@features/home-page/home').then((mod) => mod.Home),
      },
      {
        path: 'library',
        loadComponent: () => import('@features/game-library/library').then((mod) => mod.Library),
      },
      {
        path: 'wallet',
        loadComponent: () => import('@features/wallet/wallet').then((mod) => mod.Wallet),
      },
      {
        path: 'about',
        loadComponent: () => import('@features/about/about').then((mod) => mod.About),
      },
    ],
  },
];

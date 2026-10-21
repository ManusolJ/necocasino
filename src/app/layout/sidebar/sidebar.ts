import { NgIcon } from '@ng-icons/core';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { lucideHouse, lucideWallet, lucideLayoutGrid } from '@ng-icons/lucide';

import type { NavigationLink } from '@shared/models/navigation-link';

import { Logo } from '@shared/components/logo/logo';

@Component({
  imports: [Logo, NgIcon, RouterLink, RouterLinkActive],
  selector: 'app-sidebar',
  host: { class: 'contents' },
  templateUrl: './sidebar.html',
})
export class Sidebar {
  protected readonly links: readonly NavigationLink[] = [
    {
      name: 'Inicio',
      url: '/home',
      icon: lucideHouse,
    },
    {
      name: 'Biblioteca',
      url: '/library',
      icon: lucideLayoutGrid,
    },
    {
      name: 'Cartera',
      url: '/wallet',
      icon: lucideWallet,
    },
  ];
}

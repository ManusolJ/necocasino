import { NgIcon } from '@ng-icons/core';
import { Component } from '@angular/core';
import { lucideHome, lucideWallet, lucideLibrary } from '@ng-icons/lucide';

import type { NavigationLink } from '@shared/models/navigation-link';

import { Logo } from '@shared/components/logo/logo';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  imports: [Logo, NgIcon, RouterLinkActive, RouterLinkWithHref],
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  host: { class: 'flex flex-col flex-1 w-1/6' },
})
export class Sidebar {
  protected readonly links: NavigationLink[] = [
    {
      name: 'Inicio',
      url: '/home',
      icon: lucideHome,
    },
    {
      name: 'Biblioteca de juegos',
      url: '/library',
      icon: lucideLibrary,
    },
    {
      name: 'Cartera',
      url: '/wallet',
      icon: lucideWallet,
    },
  ];
}

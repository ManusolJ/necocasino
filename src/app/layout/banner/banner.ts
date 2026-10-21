import { NgIcon } from '@ng-icons/core';
import { RouterLink } from '@angular/router';
import { inject, computed, Component } from '@angular/core';
import { lucideSun, lucideMoon, lucideChevronDown } from '@ng-icons/lucide';

import { ThemeStore } from '@core/services/theme-store';

import { Coin } from '@shared/components/coin/coin';
import { Logo } from '@shared/components/logo/logo';

@Component({
  imports: [Coin, Logo, NgIcon, RouterLink],
  selector: 'app-banner',
  host: { class: 'contents' },
  templateUrl: './banner.html',
})
export class Banner {
  private readonly themeStore = inject(ThemeStore);

  protected readonly icons = { sun: lucideSun, moon: lucideMoon, chevronDown: lucideChevronDown };

  protected readonly isLight = computed(() => this.themeStore.theme() === 'light');

  protected changeTheme(): void {
    this.themeStore.setTheme(this.isLight() ? 'dark' : 'light');
  }
}

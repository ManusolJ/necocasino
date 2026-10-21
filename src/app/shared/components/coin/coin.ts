import { input, inject, computed, Component, numberAttribute } from '@angular/core';

import { ThemeStore } from '@core/services/theme-store';

@Component({
  imports: [],
  selector: 'app-coin',
  host: { class: 'inline-flex shrink-0' },
  templateUrl: './coin.html',
})
export class Coin {
  private readonly themeStore = inject(ThemeStore);

  readonly size = input(20, { transform: numberAttribute });

  protected readonly src = computed(() => `/coin-${this.themeStore.theme()}.svg`);
}

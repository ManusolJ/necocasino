import { inject, computed, Component } from '@angular/core';

import { ThemeStore } from '@core/services/theme-store';

@Component({
  imports: [],
  selector: 'app-auth',
  templateUrl: './auth.html',
  host: { class: 'flex flex-1 flex-col' },
})
export class Auth {
  private readonly themeStore = inject(ThemeStore);

  protected readonly logo = computed(() => `/logo-${this.themeStore.theme()}.svg`);

  protected readonly coverArt = computed(() => `/cover-art-${this.themeStore.theme()}.svg`);
}

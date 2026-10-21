import { inject, computed, Component } from '@angular/core';

import { ThemeStore } from '@core/services/theme-store';

@Component({
  imports: [],
  selector: 'app-logo',
  templateUrl: './logo.html',
  host: { class: 'flex items-center gap-2' },
})
export class Logo {
  private readonly themeStore = inject(ThemeStore);

  protected readonly icon = computed(() => `/logo-${this.themeStore.theme()}.svg`);
}

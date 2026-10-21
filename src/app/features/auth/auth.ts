import { inject, computed, Component } from '@angular/core';

import { environment } from '@env/environment';

import { ThemeStore } from '@core/services/theme-store';

import { Logo } from '@shared/components/logo/logo';
import { ButtonLink } from '@shared/directives/button-link';

@Component({
  imports: [Logo, ButtonLink],
  selector: 'app-auth',
  templateUrl: './auth.html',
  host: { class: 'flex flex-1 flex-col' },
})
export class Auth {
  private readonly themeStore = inject(ThemeStore);

  protected readonly loginUrl = `${environment.apiUrl}/auth/discord/login`;

  protected readonly coverArt = computed(() => `/cover-art-${this.themeStore.theme()}.svg`);
}

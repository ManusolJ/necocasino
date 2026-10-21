import { inject, computed, Component } from '@angular/core';

import { environment } from '@env/environment';

import { ThemeStore } from '@core/services/theme-store';

import { Logo } from '@shared/components/logo/logo';
import { ButtonLink } from '@shared/directives/button-link';
import { RouterLink } from '@angular/router';

@Component({
  imports: [Logo, ButtonLink, RouterLink],
  selector: 'app-auth',
  templateUrl: './auth-page.html',
  host: { class: 'flex flex-1 flex-col' },
})
export class Auth {
  private readonly themeStore = inject(ThemeStore);

  protected readonly loginUrl = `/lobby`;

  protected readonly coverArt = computed(() => `/cover-art-${this.themeStore.theme()}.svg`);
}

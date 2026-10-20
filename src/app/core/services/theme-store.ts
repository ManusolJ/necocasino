import { inject, signal, Service, DOCUMENT } from '@angular/core';

import type { ThemeValue } from '@models/theme-value';

@Service()
export class ThemeStore {
  private readonly document = inject(DOCUMENT);

  private readonly current = signal<ThemeValue>(
    this.document.documentElement.dataset['theme'] === 'light' ? 'light' : 'dark',
  );

  readonly theme = this.current.asReadonly();

  setTheme(theme: ThemeValue): void {
    this.current.set(theme);
    this.document.documentElement.dataset['theme'] = theme;
  }
}

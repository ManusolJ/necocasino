import { inject, signal, Service, DOCUMENT } from '@angular/core';

import type { ThemeValue } from '@models/theme-value';

const STORAGE_KEY = 'necocasino-theme';

@Service()
export class ThemeStore {
  private readonly document = inject(DOCUMENT);

  private readonly current = signal<ThemeValue>(this.readStored());

  readonly theme = this.current.asReadonly();

  constructor() {
    this.document.documentElement.dataset['theme'] = this.current();
  }

  setTheme(theme: ThemeValue): void {
    this.current.set(theme);
    this.document.documentElement.dataset['theme'] = theme;

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
  }

  private readStored(): ThemeValue {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    } catch {}

    return this.document.documentElement.dataset['theme'] === 'light' ? 'light' : 'dark';
  }
}

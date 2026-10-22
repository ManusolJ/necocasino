import { NgIcon } from '@ng-icons/core';
import { RouterLink } from '@angular/router';
import { lucideHeart, lucideGauge, lucideUsers } from '@ng-icons/lucide';
import { input, inject, signal, computed, Component } from '@angular/core';

import { environment } from '@env/environment';

import { ThemeStore } from '@core/services/theme-store';

import type { GameRisk } from '@models/game-risk';
import type { GameSummary } from '@models/game-summary';

const RISK_LABELS: Record<GameRisk, string> = {
  low: 'Riesgo bajo',
  high: 'Riesgo alto',
  medium: 'Riesgo medio',
  variable: 'Riesgo variable',
};

@Component({
  imports: [NgIcon, RouterLink],
  selector: 'app-game-card',
  templateUrl: './game-card.html',
  host: { class: 'flex' },
})
export class GameCard {
  private readonly themeStore = inject(ThemeStore);

  readonly game = input.required<GameSummary>();

  protected readonly icons = { heart: lucideHeart, gauge: lucideGauge, users: lucideUsers };

  private readonly failedArt = signal<string | null>(null);

  // ? Define if art must have light and dark mode, or only one version
  protected readonly art = computed(
    () => `${environment.gamesUrl}/${this.game().kind}/art-${this.themeStore.theme()}.svg`,
  );

  protected readonly showArt = computed(() => this.failedArt() !== this.art());

  protected readonly risk = computed(() => RISK_LABELS[this.game().risk]);

  protected readonly players = computed(() => {
    const { min, max } = this.game().players;

    if (min === max) {
      return `${min} ${min === 1 ? 'jugador' : 'jugadores'}`;
    }

    return `${min}–${max} jugadores`;
  });

  protected hideArt(): void {
    this.failedArt.set(this.art());
  }
}

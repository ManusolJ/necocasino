import { NgIcon } from '@ng-icons/core';
import { RouterLink } from '@angular/router';
import { input, inject, computed, Component } from '@angular/core';
import { lucideInbox, lucideCloudOff, lucideMoveRight } from '@ng-icons/lucide';

import { GameCatalog } from '@core/services/game-catalog';

import type { HomeSection } from '@models/home-section';

import { gameQueryParams } from '@utils/game-query-params';

import { GameCard } from '../game-card/game-card';

@Component({
  imports: [NgIcon, GameCard, RouterLink],
  selector: 'app-card-list',
  templateUrl: './card-list.html',
})
export class CardList {
  private readonly catalog = inject(GameCatalog);

  readonly section = input.required<HomeSection>();

  protected readonly icons = {
    inbox: lucideInbox,
    cloudOff: lucideCloudOff,
    arrowRight: lucideMoveRight,
  };

  protected readonly games = this.catalog.list(() => this.section().query);

  protected readonly headingId = computed(() => `home-${this.section().id}`);

  protected readonly libraryParams = computed(() =>
    gameQueryParams({ ...this.section().query, limit: undefined }),
  );
}

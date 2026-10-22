import type { HttpResourceRef } from '@angular/common/http';

import { Service } from '@angular/core';
import { httpResource } from '@angular/common/http';

import { environment } from '@env/environment';

import type { GameList } from '@models/game-list';
import type { GameQuery } from '@models/game-query';

import { gameQueryParams } from '@utils/game-query-params';

//TODO: Revise once API is built
@Service()
export class GameCatalog {
  list(query: () => GameQuery): HttpResourceRef<GameList | undefined> {
    return httpResource<GameList>(() => ({
      url: `${environment.apiUrl}/api/games`,
      params: gameQueryParams(query()),
      withCredentials: true,
    }));
  }
}

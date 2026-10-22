import type { GameQuery } from '@models/game-query';

export function gameQueryParams(query: GameQuery): Record<string, string> {
  const params: Record<string, string> = {};

  if (query.mode) {
    params['mode'] = query.mode;
  }

  if (query.favorites) {
    params['favorites'] = '1';
  }

  if (query.featured) {
    params['featured'] = '1';
  }

  if (query.sort) {
    params['sort'] = query.sort;
  }

  if (query.limit !== undefined) {
    params['limit'] = String(query.limit);
  }

  return params;
}

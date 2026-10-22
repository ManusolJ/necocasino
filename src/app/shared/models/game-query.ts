import type { GameMode } from '@models/game-mode';
import type { GameSort } from '@models/game-sort';

export interface GameQuery {
  mode?: GameMode;
  sort?: GameSort;
  limit?: number;
  featured?: boolean;
  favorites?: boolean;
}

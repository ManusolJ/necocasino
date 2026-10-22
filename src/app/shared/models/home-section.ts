import type { GameQuery } from '@models/game-query';

export interface HomeSection {
  id: string;
  name: string;
  icon: string;
  cta?: string;
  query: GameQuery;
}

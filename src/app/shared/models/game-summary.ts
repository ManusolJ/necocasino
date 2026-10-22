import type { GameRisk } from '@models/game-risk';
import type { PlayerRange } from '@models/player-range';

export interface GameSummary {
  kind: string;
  name: string;
  description: string;
  addedAt: string;
  risk: GameRisk;
  players: PlayerRange;
  featured: boolean;
  liked: boolean;
  likeCount: number;
}

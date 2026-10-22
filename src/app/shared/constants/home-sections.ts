import { lucideUser, lucideHeart, lucideUsers, lucideSparkles } from '@ng-icons/lucide';

import type { HomeSection } from '@models/home-section';

const SECTION_LIMIT = 6;

export const HOME_PAGE_SECTIONS: readonly HomeSection[] = [
  {
    id: 'favorites',
    name: 'Tus favoritos',
    icon: lucideHeart,
    cta: 'Ver mis juegos favoritos',
    query: {
      favorites: true,
      limit: SECTION_LIMIT,
    },
  },
  {
    id: 'newest',
    name: 'Novedades',
    icon: lucideSparkles,
    cta: 'Ver juegos añadidos recientemente',
    query: {
      sort: 'newest',
      limit: SECTION_LIMIT,
    },
  },
  {
    id: 'popular',
    name: 'Más populares',
    icon: lucideHeart,
    cta: 'Ver juegos más populares',
    query: {
      sort: 'liked',
      limit: SECTION_LIMIT,
    },
  },
  {
    id: 'featured-single',
    name: 'Juegos destacados de 1 jugador',
    icon: lucideUser,
    query: {
      featured: true,
      mode: 'single',
      limit: SECTION_LIMIT,
    },
  },
  {
    id: 'featured-multi',
    name: 'Juegos destacados de +2 jugadores',
    icon: lucideUsers,
    query: {
      featured: true,
      mode: 'multi',
      limit: SECTION_LIMIT,
    },
  },
];

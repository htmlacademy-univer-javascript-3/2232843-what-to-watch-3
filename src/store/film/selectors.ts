import {State} from '../types';


export const FilmSelector = {
  comments: (state: State) => state.film.comments,
  promo: (state: State) => state.film.promo,
  film: (state: State) => state.film.film,
  similar: (state: State) => state.film.similar
} as const;

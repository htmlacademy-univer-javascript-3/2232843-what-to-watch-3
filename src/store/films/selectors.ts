import {State} from '../types';

export const FilmsSelector = {
  list: (state: State) => state.films.list,
  favorite: (state: State) => state.films.favorite
} as const;

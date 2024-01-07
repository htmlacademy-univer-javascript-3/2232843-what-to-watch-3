import {State} from '../types';


export const GenreSelector = {
  genre: (state: State) => state.genre.genre
} as const;

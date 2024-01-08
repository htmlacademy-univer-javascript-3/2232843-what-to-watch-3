import {useMemo} from 'react';
import {useAppSelector} from '../store/hooks';
import {ALL_GENRES} from '../constants';
import {GenreSelector} from '../store/genre/selectors';
import {FilmsSelector} from '../store/films/selectors';
import {TFilmCard} from '../types';

export function useFiltredFilms() {
  const genre = useAppSelector(GenreSelector.genre);
  const films = useAppSelector(FilmsSelector.list);
  return useMemo(() => {
    if (!films) {
      return null;
    }
    if (genre === ALL_GENRES) {
      return films;
    } else {
      return films.filter((film: TFilmCard) => film.genre === genre);
    }
  }, [genre, films]);
}

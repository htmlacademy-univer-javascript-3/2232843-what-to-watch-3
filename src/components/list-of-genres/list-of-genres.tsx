import {useCallback, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {changeGenre} from '../../store/genre/action';
import {ALL_GENRES} from '../../constants';
import {TFilmCard} from '../../types';
import {GenreSelector} from '../../store/genre/selectors';
import './list-of-genres.css';


type Props = {
  films: TFilmCard[];
}

export function ListOfGenres(props: Props) {
  const {films} = props;
  const genre = useAppSelector(GenreSelector.genre);
  const dispatch = useAppDispatch();
  const handleClick = useCallback(
    (g: string) => () => dispatch(changeGenre(g)),
    [dispatch]
  );
  const listOfGenres = useMemo(() => {
    const newListOfGenres = new Set<string>();
    films.forEach((film) => newListOfGenres.add(film.genre));
    return [ALL_GENRES, ...newListOfGenres.values()];
  }, [films]);
  return (
    <ul className="catalog__genres-list">
      {listOfGenres.map((filmGenre) => {
        const className = [
          'catalog__genres-item',
          filmGenre === genre && 'catalog__genres-item--active'
        ].filter(Boolean).join(' ');
        return (
          <li key={filmGenre} className={className}>
            <button
              type="button"
              onClick={handleClick(filmGenre)}
              className="catalog__genres-link clean-button"
            >
              {filmGenre}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

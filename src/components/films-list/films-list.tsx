import {useCallback, useState} from 'react';
import {FilmCard} from '../film-card';
import {TFilmCard} from '../../types';


type Props = {
  films: TFilmCard[];
}

const COUNT_OF_SHOWN_FILMS = 8;

export function FilmsList(props: Props) {
  const [activeFilm, setActiveFilm] = useState<TFilmCard | null>(null);
  const [countOfFilmsShown, setCountOfFilmsShown] = useState<number>(COUNT_OF_SHOWN_FILMS);
  const {films} = props;
  const handleMouseEnter = useCallback((film: TFilmCard) => {
    setActiveFilm(film);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setActiveFilm(null);
  }, []);
  const handleShowMoreClick = useCallback(() => {
    setCountOfFilmsShown((state) => state + COUNT_OF_SHOWN_FILMS);
  }, []);
  const showButton = films.length > countOfFilmsShown;
  return (
    <>
      <div className="catalog__films-list">
        {films.slice(0, countOfFilmsShown).map((film) => (
          <FilmCard
            key={film.id}
            onMouseEnter={() => handleMouseEnter(film)}
            onMouseLeave={handleMouseLeave}
            isActive={activeFilm === film}
            {...film}
          />
        ))}
      </div>
      {showButton && (
        <div className="catalog__more">
          <button
            className="catalog__button"
            type="button"
            onClick={handleShowMoreClick}
          >
            Show more
          </button>
        </div>
      )}
    </>
  );
}

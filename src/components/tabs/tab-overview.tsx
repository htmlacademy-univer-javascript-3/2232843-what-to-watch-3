import {TFilmCard} from '../../../types';


type Props = {
  film: TFilmCard
}

export function TabOverview(props: Props) {
  const {film} = props;
  const {
    raiting,
    numberOfRatings,
    director,
    starring,
    description
  } = film;
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{raiting}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{numberOfRatings} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {starring.join(', ')}</strong></p>
      </div>
    </>
  );
}

import {Link} from 'react-router-dom';
import {TFilmCard} from '../../types';
import {RoutePathname} from '../../constants';


type Props = TFilmCard & {
  onMouseEnter?: () => void,
  onMouseLeave?: () => void
};

export function FilmCard(props: Props) {
  const {
    preview,
    title,
    id,
    onMouseEnter,
    onMouseLeave
  } = props;
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image">
        <img src={preview} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link
          to={`/${RoutePathname.FILMS}/${id}`}
          className="small-film-card__link"
        >
          {title}
        </Link>
      </h3>
    </article>
  );
}

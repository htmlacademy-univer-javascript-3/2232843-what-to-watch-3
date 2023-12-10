import {Link, useParams} from 'react-router-dom';
import {Header} from '../../components/header';
import {TFilmCard} from '../../types';
import {ReviewForm} from '../../components/review-form';
import {RoutePathname} from '../../constants';


type Props = {
  films: TFilmCard[]
}

export function AddReview(props: Props) {
  const {films} = props;
  const {id = ''} = useParams();
  const film = films.find((f) => f.id === id);
  const {title, preview, poster} = film as TFilmCard;
  const breadcrumbs = (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link
            to={`/${RoutePathname.FILMS}/${id}`}
            className="breadcrumbs__link"
          >
            {title}
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <Link
            to={`/${RoutePathname.FILMS}/${id}/${RoutePathname.REVIEW}`}
            className="breadcrumbs__link"
          >
            Add review
          </Link>
        </li>
      </ul>
    </nav>
  );
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={preview} alt={title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header breadcrumbs={breadcrumbs}/>

        <div className="film-card__poster film-card__poster--small">
          <img src={poster} alt={`${title} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm />
      </div>

    </section>
  );
}

import {Link, useParams, Navigate} from 'react-router-dom';
import {Header} from '../../components/header';
import {Footer} from '../../components/footer';
import {FilmsList} from '../../components/films-list';
import {MyListButton, PlayButton} from '../../components/buttons';
import {RoutePathname} from '../../constants';
import {TFilmCard} from '../../types';


type Props = {
  films: TFilmCard[]
}

export function Film(props: Props) {
  const {films} = props;
  const {id = ''} = useParams();
  const film = films.find((f) => f.id === id);
  if (!film) {
    return <Navigate to={`/${RoutePathname.NOT_FOUND}`}/>;
  }
  const {
    title,
    preview,
    genre,
    year,
    poster,
    raiting,
    numberOfRatings,
    director,
    starring,
    description
  } = film;
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={preview} alt={title}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header/>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{year}</span>
              </p>
              <div className="film-card__buttons">
                <PlayButton/>
                <MyListButton/>
                <Link
                  to={`/${RoutePathname.FILMS}/${id}/${RoutePathname.REVIEW}`}
                  className="btn film-card__button"
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={poster} alt={`${title} poster`} width="218" height="327"/>
            </div>
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>
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
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={films}/>
        </section>
        <Footer/>
      </div>
    </>
  );
}

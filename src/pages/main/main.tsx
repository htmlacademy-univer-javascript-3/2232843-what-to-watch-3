import {Header} from '../../components/header';
import {Footer} from '../../components/footer';
import {FilmsList} from '../../components/films-list';
import {MyListButton, PlayButton} from '../../components/buttons';
import {TFilmCard} from '../../types';


export type Props = {
  films: TFilmCard[]
}

export function Main(props: Props) {
  const {films} = props;
  const film = films[0];
  const {title, genre, year, preview, poster} = film;
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={preview} alt={title}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header/>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={poster} alt="Film poster" width="218" height="327" />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{year}</span>
              </p>
              <div className="film-card__buttons">
                <PlayButton/>
                <MyListButton/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>
          <FilmsList films={films}/>
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}

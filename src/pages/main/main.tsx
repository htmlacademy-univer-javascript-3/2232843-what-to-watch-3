import {Header} from '../../components/header';
import {Footer} from '../../components/footer';
import {FilmsList} from '../../components/films-list';
import {MyListButton, PlayButton} from '../../components/buttons';
import {TFilmCard} from '../../types';
import {ListOfGenres} from '../../components/list-of-genres';
import {useFiltredFilms} from '../../hooks';


export type Props = {
  films: TFilmCard[]
}

export function Main(props: Props) {
  const {films} = props;
  const film = films[0];
  const {title, genre, year, preview, poster} = film;
  const filtredFilms = useFiltredFilms();
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
          <ListOfGenres films={films}/>
          <FilmsList films={filtredFilms}/>
        </section>
        <Footer/>
      </div>
    </>
  );
}

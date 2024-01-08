import {Header} from '../../components/header';
import {Footer} from '../../components/footer';
import {FilmsList} from '../../components/films-list';
import {MyListButton, PlayButton} from '../../components/buttons';
import {ListOfGenres} from '../../components/list-of-genres';
import {useFiltredFilms} from '../../hooks';
import {useEffect, useState} from 'react';
import {useSnackbar} from 'notistack';
import {Loader} from '../../components/loader';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {fetchFilms} from '../../store/films/api';
import {fetchPromoFilm} from '../../store/film/api';
import {FilmsSelector} from '../../store/films/selectors';
import {FilmSelector} from '../../store/film/selectors';


export function Main() {
  const dispatch = useAppDispatch();
  const {enqueueSnackbar} = useSnackbar();
  const [loading, setLoading] = useState(false);
  const films = useAppSelector(FilmsSelector.list);
  const promoFilm = useAppSelector(FilmSelector.promo);
  useEffect(() => {
    setLoading(true);
    dispatch(fetchFilms())
      .finally(() => {
        setLoading(false);
      });
    dispatch(fetchPromoFilm());
  }, [dispatch, enqueueSnackbar]);
  const filtredFilms = useFiltredFilms();
let filmPromoContent = null;
  if (promoFilm) {
    const {name, genre, released, backgroundImage, posterImage, videoLink, id} = promoFilm;
    filmPromoContent = (
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header/>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt="Film poster" width="218" height="327" />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>
              <div className="film-card__buttons">
                <PlayButton videoLink={videoLink}/>
                <MyListButton filmId={id}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <>
      {filmPromoContent}
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
		  {loading && <Loader/>}
          {!loading && (
            <>
              {films && <ListOfGenres films={films}/>}
              {filtredFilms && <FilmsList films={filtredFilms}/>}
            </>
          )}
        </section>
        <Footer/>
      </div>
    </>
  );
}

import {Header} from '../../components/header';
import {Footer} from '../../components/footer';
import {FilmsList} from '../../components/films-list';
import {useEffect} from 'react';
import {fetchFavoriteFilms} from '../../store/films/api';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {FilmsSelector} from '../../store/films/selectors';


export function MyList() {
  const favoriteFilms = useAppSelector(FilmsSelector.favorite);
  if (!favoriteFilms) {
    return null;
  }
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteFilms());
  }, [dispatch]);
  return (
    <div className="user-page">
      <Header />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={favoriteFilms}/>
      </section>
      <Footer />
    </div>
  );
}

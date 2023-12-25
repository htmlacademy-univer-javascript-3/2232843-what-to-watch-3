import {Header} from '../../components/header';
import {Footer} from '../../components/footer';
import {FilmsList} from '../../components/films-list';
import {useEffect} from 'react';
import {fetchFavoriteFilms} from '../../store/api';
import {useAppDispatch, useAppSelector} from '../../store';


export function MyList() {
  const {favoriteFilms} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteFilms());
  }, [dispatch]);
  if (!favoriteFilms) {
    return null;
  }
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

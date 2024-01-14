import {Header} from '../../components/header';
import {Footer} from '../../components/footer';
import {FilmsList} from '../../components/films-list';
import {useEffect} from 'react';
import {fetchFavoriteFilms} from '../../store/films/api';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {FilmsSelector} from '../../store/films/selectors';
import {AuthorizationSelector} from "../../store/authorization/selectors";
import {AuthorizationStatus} from "../../constants";


export function MyList() {
  const authorizationStatus = useAppSelector(AuthorizationSelector.status);
  const favoriteFilms = useAppSelector(FilmsSelector.favorite);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (authorizationStatus == AuthorizationStatus.authorized) {
      dispatch(fetchFavoriteFilms());
    }
  }, [dispatch, authorizationStatus]);
  return (
    <div className="user-page">
      <Header />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={favoriteFilms ?? []}/>
      </section>
      <Footer />
    </div>
  );
}

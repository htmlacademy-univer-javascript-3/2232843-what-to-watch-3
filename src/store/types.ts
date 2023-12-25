import {TComment, TFilm, TFilmCard, TFilmPromo} from '../types';
import {store} from '../../store/index';
import {AuthorizationStatus} from '../../constants';


export type AppDispatch = typeof store.dispatch;

export type State = {
  genre: string,
  films: TFilmCard[] | null,
  promoFilm: TFilmPromo | null,
  film: TFilm | null,
  filmsSimilar: TFilmCard[] | null,
  filmsComments: TComment[] | null,
  favoriteFilms: TFilmCard[] | null,
  authorizationStatus: AuthorizationStatus | null
}

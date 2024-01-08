import {TComment, TFilm, TFilmCard, TFilmPromo} from '../../types';


export type State = {
  promo: TFilmPromo | null;
  film: TFilm | null;
  similar: TFilmCard[] | null;
  comments: TComment[] | null;
}

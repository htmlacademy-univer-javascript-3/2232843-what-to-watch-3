import {TFilmCard} from '../../types';
import {store} from '../../store/index';


export type AppDispatch = typeof store.dispatch;

export type State = {
  genre: string,
  films: TFilmCard[]
}

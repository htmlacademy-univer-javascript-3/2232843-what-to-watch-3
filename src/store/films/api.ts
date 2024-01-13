import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {getSavedToken} from '../../token';
import {TFilm, TFilmCard} from '../../types';
import {AppDispatch, State} from '../types';
import {updateFavoriteFilms, updateFilms} from './action';
import {enqueueSnackbar} from 'notistack';
import {FilmStatus} from '../../constants';


export const fetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/fetchList',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data: films} = await api.get<TFilmCard[]>('/films');
      dispatch(updateFilms(films));
    } catch (_e) {
      enqueueSnackbar('Unable to load films. Try again later', {variant: 'error'});
    }
  },
);

export const fetchFavoriteFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/fetchFavorite',
  async (_arg, {dispatch, extra: api}) => {
    const token = getSavedToken();
    try {
      const {data: films} = await api.get<TFilmCard[]>('/favorite', {headers: {'X-Token': token}});
      dispatch(updateFavoriteFilms(films));
    } catch (_e) {
      enqueueSnackbar('Unable to load favorite films. Sign in first or try again later', {variant: 'info'});
    }
  },
);

export const postFilmStatus = createAsyncThunk<void, {filmId: string; status: FilmStatus}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'films/postFilmStatus',
  async (arg, {dispatch, extra: api}) => {
    const {filmId, status} = arg;
    const token = getSavedToken();
    try {
      await api.post<TFilm[]>(`/favorite/${filmId}/${status}`, {}, {headers: {'X-Token': token}});
      dispatch(fetchFavoriteFilms());
    } catch (_e) {
      enqueueSnackbar('Unable to update favorite films. Try again later', {variant: 'error'});
    }
  },
);

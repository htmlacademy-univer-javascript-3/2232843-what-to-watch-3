import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {
  updateFavoriteFilms,
  updateFilm,
  updateFilmComments,
  updateFilms,
  updateFilmsSimilar,
  updatePromoFilm
} from './action';
import {TComment, TFilm, TFilmCard, TFilmPromo} from '../../types';
import {AppDispatch, State} from './types';


export const fetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data: films} = await api.get<TFilmCard[]>('/films');
    dispatch(updateFilms(films));
  },
);

export const fetchPromoFilm = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data: film} = await api.get<TFilmPromo>('/promo');
    dispatch(updatePromoFilm(film));
  },
);

export const fetchFilm = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchFilm',
  async (arg, {dispatch, extra: api}) => {
    const {data: film} = await api.get<TFilm>(`/films/${arg}`);
    dispatch(updateFilm(film));
  },
);

export const fetchFilmSimilar = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchFilmSimilar',
  async (arg, {dispatch, extra: api}) => {
    const {data: films} = await api.get<TFilmCard[]>(`/films/${arg}/similar`);
    dispatch(updateFilmsSimilar(films));
  },
);

export const fetchFilmComments = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchFilmComments',
  async (arg, {dispatch, extra: api}) => {
    const {data: comments} = await api.get<TComment[]>(`/comments/${arg}`);
    dispatch(updateFilmComments(comments));
  },
);

export const fetchFavoriteFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchFavoriteFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data: films} = await api.get<TFilmCard[]>('/favorite');
    dispatch(updateFavoriteFilms(films));
  },
);

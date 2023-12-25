import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {
  updateFavoriteFilms,
  updateFilm,
  updateFilmComments,
  updateFilms,
  updateFilmsSimilar,
  updatePromoFilm,
  updateAuthorizationStatus
} from './action';
import {TComment, TFilm, TFilmCard, TFilmPromo, TLoginRequest, TUser} from '../../types';
import {AppDispatch, State} from './types';
import {deleteToken, getSavedToken, saveToken} from '../token';
import {AuthorizationStatus} from '../constants';


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
    const token = getSavedToken();
    const {data: films} = await api.get<TFilmCard[]>('/favorite', {headers: {'X-Token': token}});
    dispatch(updateFavoriteFilms(films));
  },
);

export const getLogin = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'getLogin',
  async (_arg, {dispatch, extra: api}) => {
    const token = getSavedToken();
    try {
      await api.get<TUser>('/login', {headers: {'X-Token': token}});
      dispatch(updateAuthorizationStatus(AuthorizationStatus.authorized));
    } catch (error) {
      dispatch(updateAuthorizationStatus(AuthorizationStatus.notAuthorized));
    }
  },
);

export const postLogin = createAsyncThunk<void, TLoginRequest, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'postLogin',
  async (arg, {dispatch, extra: api}) => {
    const {data} = await api.post<TUser>('/login', arg);
    saveToken(data.token);
    dispatch(updateAuthorizationStatus(AuthorizationStatus.authorized));
  },
);

export const fetchLogout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchLogout',
  async (_arg, {dispatch, extra: api}) => {
    const token = getSavedToken();
    await api.delete('/logout', {headers: {'X-Token': token}});
    deleteToken();
    dispatch(updateAuthorizationStatus(AuthorizationStatus.notAuthorized));
  },
);

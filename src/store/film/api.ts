import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {TComment, TCommentRequest, TFilm, TFilmCard, TFilmPromo, TUser} from '../../types';
import {AuthorizationStatus} from '../../constants';
import {getSavedToken, saveToken} from '../../token';
import {updateAuthorizationStatus} from '../authorization/action';
import {AppDispatch, State} from '../types';
import {updateFilm, updateFilmComments, updateFilmsSimilar, updatePromoFilm} from './action';


export const fetchPromoFilm = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'film/fetchPromo',
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
  'film/fetch',
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
  'film/fetchSimilar',
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
  'film/fetchComments',
  async (arg, {dispatch, extra: api}) => {
    const {data: comments} = await api.get<TComment[]>(`/comments/${arg}`);
    dispatch(updateFilmComments(comments));
  },
);

export const postComments = createAsyncThunk<void, TCommentRequest, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'film/postComments',
  async (arg, {dispatch, extra: api}) => {
    const {filmId, comment, rating} = arg;
    const token = getSavedToken();
    const {data} = await api.post<TUser>(
      `/comments/${filmId}`,
      {comment, rating},
      {headers: {'X-Token': token}}
    );
    saveToken(data.token);
    dispatch(updateAuthorizationStatus(AuthorizationStatus.authorized));
  },
);

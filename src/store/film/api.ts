import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {TComment, TCommentRequest, TFilm, TFilmCard, TFilmPromo} from '../../types';
import {AuthorizationStatus} from '../../constants';
import {getSavedToken} from '../../token';
import {updateAuthorizationStatus} from '../authorization/action';
import {AppDispatch, State} from '../types';
import {updateFilm, updateFilmComments, updateFilmsSimilar, updatePromoFilm} from './action';
import {enqueueSnackbar} from 'notistack';


export const fetchPromoFilm = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'film/fetchPromo',
  async (_arg, {rejectWithValue, dispatch, extra: api}) => {
    try {
      const {data: film} = await api.get<TFilmPromo>('/promo');
      dispatch(updatePromoFilm(film));
    } catch (e) {
      enqueueSnackbar('Unable to load promo video. Try again later', {variant: 'error'});
      return rejectWithValue(e);
    }
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
    try {
      const {data: films} = await api.get<TFilmCard[]>(`/films/${arg}/similar`);
      dispatch(updateFilmsSimilar(films));
    } catch (_e) {
      enqueueSnackbar('Unable to load similar films. Try again later', {variant: 'error'});
    }
  },
);

export const fetchFilmComments = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'film/fetchComments',
  async (arg, {dispatch, extra: api}) => {
    try {
      const {data: comments} = await api.get<TComment[]>(`/comments/${arg}`);
      dispatch(updateFilmComments(comments));
    } catch (_e) {
      enqueueSnackbar('Unable to load reviews for this film. Try again later', {variant: 'error'});
    }
  },
);

export const postComments = createAsyncThunk<void, TCommentRequest, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'film/postComments',
  async (arg, {rejectWithValue, dispatch, extra: api}) => {
    const {filmId, comment, rating} = arg;
    const token = getSavedToken();
    try {
      await api.post<TComment>(
        `/comments/${filmId}`,
        {comment, rating},
        {headers: {'X-Token': token}}
      );
      dispatch(updateAuthorizationStatus(AuthorizationStatus.authorized));
    } catch (e) {
      enqueueSnackbar('Unable to post new review. Try again later', {variant: 'error'});
      return rejectWithValue(e);
    }
  },
);

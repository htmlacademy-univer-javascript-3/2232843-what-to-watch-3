import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {getSavedToken} from '../../token';
import {TFilmCard} from '../../types';
import {AppDispatch, State} from '../types';
import {updateFavoriteFilms, updateFilms} from './action';


export const fetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchList',
  async (_arg, {dispatch, extra: api}) => {
    const {data: films} = await api.get<TFilmCard[]>('/films');
    dispatch(updateFilms(films));
  },
);

export const fetchFavoriteFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchFavorite',
  async (_arg, {dispatch, extra: api}) => {
    const token = getSavedToken();
    const {data: films} = await api.get<TFilmCard[]>('/favorite', {headers: {'X-Token': token}});
    dispatch(updateFavoriteFilms(films));
  },
);

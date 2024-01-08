import {createAction} from '@reduxjs/toolkit';
import {TFilmCard} from '../../types';


const Action = {
  UPDATE_FILMS: 'films/updateList',
  UPDATE_FAVORITE_FILMS: 'films/updateFavorite'
} as const;

export const updateFilms = createAction(
  Action.UPDATE_FILMS,
  (value: TFilmCard[]): { payload: TFilmCard[] } => ({
    payload: value
  })
);

export const updateFavoriteFilms = createAction(
  Action.UPDATE_FAVORITE_FILMS,
  (value: TFilmCard[]): { payload: TFilmCard[] } => ({
    payload: value
  })
);

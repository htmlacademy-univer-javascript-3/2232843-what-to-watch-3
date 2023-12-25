import {createAction} from '@reduxjs/toolkit';
import {TComment, TFilm, TFilmCard, TFilmPromo} from '../../types';


export const Action = {
  CHANGE_GENRE: 'genre/change',
  UPDATE_FILMS: 'film/updateFilms',
  UPDATE_FILM_PROMO: 'film/updatePromo',
  UPDATE_FILM: 'film/update',
  UPDATE_FILMS_SIMILAR: 'film',
  UPDATE_FILMS_COMMENTS: 'film/updateComments',
  UPDATE_FAVORITE_FILMS: 'film/updateFavorites'
};

export const changeGenre = createAction(
  Action.CHANGE_GENRE,
  (value: string): {payload: string} => ({
    payload: value
  })
);

export const updateFilms = createAction(
  Action.UPDATE_FILMS,
  (value: TFilmCard[]): { payload: TFilmCard[] } => ({
    payload: value
  })
);

export const updatePromoFilm = createAction(
  Action.UPDATE_FILM_PROMO,
  (value: TFilmPromo): { payload: TFilmPromo } => ({
    payload: value
  })
);

export const updateFilm = createAction(
  Action.UPDATE_FILM,
  (value: TFilm): { payload: TFilm } => ({
    payload: value
  })
);

export const updateFilmsSimilar = createAction(
  Action.UPDATE_FILMS_SIMILAR,
  (value: TFilmCard[]): { payload: TFilmCard[] } => ({
    payload: value
  })
);

export const updateFilmComments = createAction(
  Action.UPDATE_FILMS_COMMENTS,
  (value: TComment[]): { payload: TComment[] } => ({
    payload: value
  })
);

export const updateFavoriteFilms = createAction(
  Action.UPDATE_FAVORITE_FILMS,
  (value: TFilmCard[]): { payload: TFilmCard[] } => ({
    payload: value
  })
);
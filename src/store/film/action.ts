import {createAction} from '@reduxjs/toolkit';
import {TComment, TFilm, TFilmCard, TFilmPromo} from '../../types';


const Action = {
  UPDATE_FILM_PROMO: 'film/updatePromo',
  UPDATE_FILM: 'film/update',
  UPDATE_FILM_SIMILAR: 'film/updateSimilar',
  UPDATE_FILM_COMMENTS: 'film/updateComments'
} as const;

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
  Action.UPDATE_FILM_SIMILAR,
  (value: TFilmCard[]): { payload: TFilmCard[] } => ({
    payload: value
  })
);


export const updateFilmComments = createAction(
  Action.UPDATE_FILM_COMMENTS,
  (value: TComment[]): { payload: TComment[] } => ({
    payload: value
  })
);

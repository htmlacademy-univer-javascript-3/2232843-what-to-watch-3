import {createReducer} from '@reduxjs/toolkit';
import {updateFilm, updateFilmComments, updateFilmsSimilar, updatePromoFilm} from './action';
import {State} from './types';


const initialState: State = {
  promo: null,
  film: null,
  similar: null,
  comments: null
};

export const film = createReducer(initialState, (builder) => {
  builder
    .addCase(updatePromoFilm, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(updateFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(updateFilmsSimilar, (state, action) => {
      state.similar = action.payload;
    })
    .addCase(updateFilmComments, (state, action) => {
      state.comments = action.payload;
    });
});

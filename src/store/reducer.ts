import {createReducer} from '@reduxjs/toolkit';
import {FILMS} from '../mocks/films';
import {ALL_GENRES} from '../constants';
import {changeGenre} from './action';
import {State} from './types';


const initialState: State = {
  genre: ALL_GENRES,
  films: FILMS
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
});

import {createReducer} from '@reduxjs/toolkit';
import {updateFavoriteFilms, updateFilms} from './action';
import {State} from './types';


const initialState: State = {
  list: null,
  favorite: null,
};

export const films = createReducer(initialState, (builder) => {
  builder
    .addCase(updateFilms, (state, action) => {
      state.list = action.payload;
    })
    .addCase(updateFavoriteFilms, (state, action) => {
      state.favorite = action.payload;
    });
});

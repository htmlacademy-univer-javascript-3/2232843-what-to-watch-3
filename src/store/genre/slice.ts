import {createReducer} from '@reduxjs/toolkit';
import {ALL_GENRES} from '../../constants';
import {changeGenre} from './action';
import {State} from './types';


const initialState: State = {
  genre: ALL_GENRES
};

export const genre = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
});

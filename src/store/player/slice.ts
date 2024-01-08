import {createReducer} from '@reduxjs/toolkit';
import {updateVideoLink} from './action';
import {State} from './types';


const initialState: State = {
  videoLink: undefined
};

export const player = createReducer(initialState, (builder) => {
  builder
    .addCase(updateVideoLink, (state, action) => {
      state.videoLink = action.payload;
    });
});

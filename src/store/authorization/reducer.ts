import {createReducer} from '@reduxjs/toolkit';
import {updateAuthorizationStatus} from './action';
import {State} from './types';


const initialState: State = {
  status: null
};

export const authorization = createReducer(initialState, (builder) => {
  builder
    .addCase(updateAuthorizationStatus, (state, action) => {
      state.status = action.payload;
    });
});

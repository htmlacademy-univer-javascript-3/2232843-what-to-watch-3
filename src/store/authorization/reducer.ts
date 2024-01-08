import {createReducer} from '@reduxjs/toolkit';
import {updateAuthorizationStatus} from './action';
import {State} from './types';


const initialState: State = {
  status: null,
  user: null
};

export const authorization = createReducer(initialState, (builder) => {
  builder
    .addCase(updateAuthorizationStatus, (state, action) => {
      state.status = action.payload.status;
      state.user = action.payload.user;
    });
});

import {configureStore} from '@reduxjs/toolkit';
import {baseReducer} from './reducer';
import {createAPI} from '../services/api';


const api = createAPI();

export const store = configureStore({
  reducer: baseReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api
    }
  })
});

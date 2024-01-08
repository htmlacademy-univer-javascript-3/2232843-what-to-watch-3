import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {deleteToken, getSavedToken, saveToken} from '../../token';
import {AuthorizationStatus} from '../../constants';
import {TLoginRequest, TUser} from '../../types';
import {AppDispatch, State} from '../types';
import {updateAuthorizationStatus} from './action';
import {enqueueSnackbar} from 'notistack';


export const getLogin = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'getLogin',
  async (_arg, {dispatch, extra: api}) => {
    const token = getSavedToken();
    try {
      await api.get<TUser>('/login', {headers: {'X-Token': token}});
      dispatch(updateAuthorizationStatus(AuthorizationStatus.authorized));
    } catch (error) {
      dispatch(updateAuthorizationStatus(AuthorizationStatus.notAuthorized));
    }
  },
);

export const postLogin = createAsyncThunk<void, TLoginRequest, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postLogin',
  async (arg, {rejectWithValue, dispatch, extra: api}) => {
    try {
      const {data} = await api.post<TUser>('/login', arg);
      saveToken(data.token);
      dispatch(updateAuthorizationStatus(AuthorizationStatus.authorized));
    } catch (e) {
      enqueueSnackbar('Unable to sign in. Check entered email and password', {variant: 'error'});
      return rejectWithValue(e);
    }
  },
);

export const fetchLogout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchLogout',
  async (_arg, {rejectWithValue, dispatch, extra: api}) => {
    const token = getSavedToken();
    try {
      await api.delete('/logout', {headers: {'X-Token': token}});
      deleteToken();
      dispatch(updateAuthorizationStatus(AuthorizationStatus.notAuthorized));
    } catch (e) {
      enqueueSnackbar('Unable to sign out. Try again later', {variant: 'error'});
      return rejectWithValue(e);
    }
  },
);

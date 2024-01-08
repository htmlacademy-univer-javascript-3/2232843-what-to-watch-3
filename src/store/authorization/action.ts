import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../constants';
import {TUser} from '../../types';


const Action = {
  UPDATE_AUTHORIZATION_STATUS: 'authorization/updateStatus'
} as const;

export const updateAuthorizationStatus = createAction(
  Action.UPDATE_AUTHORIZATION_STATUS,
  (value: AuthorizationStatus, data: TUser | null): {payload: {status: AuthorizationStatus; user: TUser | null}} => ({
    payload: {
      status: value,
      user: data
    }
  })
);

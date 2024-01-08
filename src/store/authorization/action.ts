import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../constants';


const Action = {
  UPDATE_AUTHORIZATION_STATUS: 'authorization/updateStatus'
} as const;

export const updateAuthorizationStatus = createAction(
  Action.UPDATE_AUTHORIZATION_STATUS,
  (value: AuthorizationStatus): { payload: AuthorizationStatus } => ({
    payload: value
  })
);

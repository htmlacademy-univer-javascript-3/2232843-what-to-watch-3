import {State} from '../types';


export const AuthorizationSelector = {
  status: (state?: State) => state?.authorization.status,
  user: (state?: State) => state?.authorization.user
} as const;

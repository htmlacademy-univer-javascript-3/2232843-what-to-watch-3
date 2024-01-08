import {State} from '../types';


export const AuthorizationSelector = {
  status: (state: State) => state.authorization.status
} as const;

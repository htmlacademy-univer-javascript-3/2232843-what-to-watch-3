import {AuthorizationStatus} from '../../constants';
import {TUser} from '../../types';


export type State = {
  status: AuthorizationStatus | null;
  user: TUser | null;
}

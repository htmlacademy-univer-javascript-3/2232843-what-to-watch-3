import {JSX} from 'react';
import {Navigate} from 'react-router-dom';
import {RoutePathname} from '../constants';


type Props = {
  isAuth?: boolean,
  children: JSX.Element
};

export function CheckAuth(props: Props): JSX.Element {
  const {isAuth = true, children} = props;
  return isAuth ? children : <Navigate to={RoutePathname.MAIN} />;
}

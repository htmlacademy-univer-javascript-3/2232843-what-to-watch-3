import {JSX} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthorizationStatus, RoutePathname} from '../../constants';
import {useAppSelector} from '../../store';


type Props = {
  children: JSX.Element,
  navigateTo?: string
};

export function PrivateRoute(props: Props): JSX.Element {
  const {children, navigateTo = RoutePathname.MAIN} = props;
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return authorizationStatus === AuthorizationStatus.notAuthorized
    ? <Navigate to={navigateTo} />
    : children;
}

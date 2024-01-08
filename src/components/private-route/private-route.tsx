import {JSX} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthorizationStatus, RoutePathname} from '../../constants';
import {useAppSelector} from '../../store/hooks';
import {AuthorizationSelector} from '../../store/authorization/selectors';


type Props = {
  children: JSX.Element;
  navigateTo?: string;
};

export function PrivateRoute(props: Props): JSX.Element {
  const {children, navigateTo = RoutePathname.main} = props;
  const authorizationStatus = useAppSelector(AuthorizationSelector.status);
  return authorizationStatus === AuthorizationStatus.notAuthorized
    ? <Navigate to={navigateTo} />
    : children;
}

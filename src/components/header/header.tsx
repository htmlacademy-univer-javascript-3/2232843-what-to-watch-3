import {JSX, useCallback} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {RoutePathname, AuthorizationStatus, ReduxStateStatus} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../store';
import {fetchLogout} from '../../store/api'
import {useSnackbar} from 'notistack';


type Props = {
  breadcrumbs?: JSX.Element
}

export function Header(props: Props) {
  const {breadcrumbs} = props;
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.authorized;
  const handleLogout = useCallback(() => {
    dispatch(fetchLogout()).then((res) => {
      if (res.meta.requestStatus === ReduxStateStatus.rejected) {
        enqueueSnackbar(
          'Inable to logout. Try again later',
          {variant: 'error'}
        );
      } else {
        navigate(RoutePathname.MAIN);
      }
    });
  }, [navigate, dispatch, enqueueSnackbar]);
  const handleLogin = useCallback(() => {
    navigate(`/${RoutePathname.LOGIN}`);
  }, [navigate]);
  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Link to={RoutePathname.MAIN} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {breadcrumbs}
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          {isAuthorized && (
            <div className="user-block__link" onClick={handleLogout}>
              Sign out
            </div>
          )}
          {!isAuthorized && (
            <div className="user-block__link" onClick={handleLogin}>
              Sign in
            </div>
          )}
        </li>
      </ul>
    </header>
  );
}

import {JSX, useCallback} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {RoutePathname, AuthorizationStatus, ReduxStateStatus} from '../../constants';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {fetchLogout} from '../../store/authorization/api';
import {AuthorizationSelector} from '../../store/authorization/selectors';
import {updateFilm} from '../../store/film/action';


type Props = {
  breadcrumbs?: JSX.Element;
}

export function Header(props: Props) {
  const {breadcrumbs} = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(AuthorizationSelector.status);
  const user = useAppSelector(AuthorizationSelector.user);
  const isAuthorized = authorizationStatus === AuthorizationStatus.authorized;
  const handleClickOnAvatar = useCallback(() => {
    navigate(`/${RoutePathname.myList}`);
  }, [navigate]);
  const handleLogoutClick = useCallback(() => {
    dispatch(fetchLogout()).then((res) => {
      if (res.meta.requestStatus !== ReduxStateStatus.rejected) {
        navigate(RoutePathname.main);
      }
    });
  }, [navigate, dispatch]);
  const handleLoginClick = useCallback(() => {
    navigate(`/${RoutePathname.login}`);
  }, [navigate]);
  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Link to={RoutePathname.main} className="logo__link" onClick={() => {
          dispatch(updateFilm(null));
        }}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {breadcrumbs}
      <ul className="user-block">
        {isAuthorized && (
          <li className="user-block__item">
            <div className="user-block__avatar" onClick={handleClickOnAvatar}>
              <img src={user?.avatarUrl} alt="User avatar" width="63" height="63"/>
            </div>
          </li>
        )}
        <li className="user-block__item">
          {isAuthorized && (
            <div className="user-block__link" onClick={handleLogoutClick}>
              Sign out
            </div>
          )}
          {!isAuthorized && (
            <div className="user-block__link" onClick={handleLoginClick}>
              Sign in
            </div>
          )}
        </li>
      </ul>
    </header>
  );
}

import {Link} from 'react-router-dom';
import {RoutePathname} from '../../constants';
import {updateFilm} from '../../store/film/action';
import {useAppDispatch} from '../../store/hooks';


export function Footer() {
  const dispatch = useAppDispatch();
  return (
    <footer className="page-footer">
      <div className="logo">
        <Link to={RoutePathname.main} className="logo__link logo__link--light" onClick={() => {
          dispatch(updateFilm(null));
        }}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

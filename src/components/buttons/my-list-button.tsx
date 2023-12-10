import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {RoutePathname} from '../../constants';


export function MyListButton() {
  const navigate = useNavigate();
  const handleMyListClick = useCallback(() => {
    navigate(`/${RoutePathname.MY_LIST}`);
  }, [navigate]);
  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleMyListClick}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">9</span>
    </button>
  );
}

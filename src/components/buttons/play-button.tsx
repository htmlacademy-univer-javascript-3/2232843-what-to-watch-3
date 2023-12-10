import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {RoutePathname} from '../../constants';


export function PlayButton() {
  const navigate = useNavigate();
  const handlePlayerClick = useCallback(() => {
    navigate(`/${RoutePathname.PLAYER}`);
  }, [navigate]);
  return (
    <button
      className="btn btn--play film-card__button"
      type="button"
      onClick={handlePlayerClick}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

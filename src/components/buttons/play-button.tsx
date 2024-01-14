import {Button} from './button';
import {RoutePathname} from '../../constants';
import {useAppDispatch} from '../../store/hooks';
import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';


type Props = {
  filmId: string;
}

export function PlayButton(props: Props) {
  const {filmId} = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(`/${RoutePathname.player}/${filmId}`);
  }, [dispatch, filmId, navigate]);
  return (
    <Button
      className="btn--play"
      onClick={handleClick}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Button>
  );
}

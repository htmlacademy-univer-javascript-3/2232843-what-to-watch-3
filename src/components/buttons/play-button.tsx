import {Button} from './button';
import {RoutePathname} from '../../constants';


export function PlayButton() {
  return (
    <Button
      className="btn--play"
      to={`/${RoutePathname.player}`}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Button>
  );
}

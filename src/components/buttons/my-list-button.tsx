import {Button} from './button';
import {RoutePathname} from '../../constants';


export function MyListButton() {
  return (
    <Button
      className="btn--list"
      to={`/${RoutePathname.MY_LIST}`}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">9</span>
    </Button>
  );
}

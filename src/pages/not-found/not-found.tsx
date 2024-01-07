import {Link} from 'react-router-dom';
import {RoutePathname} from '../../constants.ts';
import './not-found.css';


export function NotFound() {
  return (
    <div className="page">
      <h1>404 NOT FOUND</h1>
      <Link to={RoutePathname.main} className="link">
        Return to main page
      </Link>
    </div>
  );
}

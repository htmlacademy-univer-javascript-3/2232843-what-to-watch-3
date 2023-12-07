import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Main, MainProps} from '../pages/main';
import {SignIn} from '../pages/sign-in';
import {MyList} from '../pages/my-list';
import {Film} from '../pages/film';
import {AddReview} from '../pages/add-review';
import {Player} from '../pages/player';
import {NotFound} from '../pages/not-found';
import {CheckAuth} from '../check-auth';
import {RoutePathname} from '../constants';


type Props = MainProps;

export function App(props: Props) {
  const {filmTitle, filmGenre, filmPromoDate} = props;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePathname.MAIN}>
          <Route
            index
            element={(
              <Main
                filmTitle={filmTitle}
                filmGenre={filmGenre}
                filmPromoDate={filmPromoDate}
              />
            )}
          />
          <Route
            path={RoutePathname.LOGIN}
            element={<SignIn/>}
          />
          <Route
            path={RoutePathname.MY_LIST}
            element={<CheckAuth><MyList/></CheckAuth>}
          />
          <Route
            path={`${RoutePathname.FILMS}/:id`}
            element={<Film/>}
          />
          <Route
            path={`${RoutePathname.FILMS}/:id/${RoutePathname.REVIEW}`}
            element={<AddReview/>}
          />
          <Route
            path={`${RoutePathname.PLAYER}`}
            element={<Player/>}
          />
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>

  );
}

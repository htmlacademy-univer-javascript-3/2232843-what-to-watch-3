import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Main} from '../pages/main';
import {SignIn} from '../pages/sign-in';
import {MyList} from '../pages/my-list';
import {Film} from '../pages/film';
import {AddReview} from '../pages/add-review';
import {Player} from '../pages/player';
import {NotFound} from '../pages/not-found';
import {CheckAuth} from '../check-auth';
import {RoutePathname} from '../constants';
import {ScrollToTop} from '../components/scroll-to-top';
import {TPlayer} from '../types';
import {Provider} from 'react-redux';
import {store} from '../store';
import {SnackbarProvider} from 'notistack';


type Props = {
  player: TPlayer
};

export function App(props: Props) {
  const {player} = props;
  return (
    <Provider store={store}>
      <Router player={player} />
    </Provider>
  );
}

function Router(props: Props) {
  const {player} = props;
  return (
    <SnackbarProvider>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path={RoutePathname.MAIN}>
              <Route
                index
                element={<Main/>}
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
                path={RoutePathname.PLAYER}
                element={<Player {...player}/>}
              />
            </Route>
            <Route path={RoutePathname.NOT_FOUND} element={<NotFound/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

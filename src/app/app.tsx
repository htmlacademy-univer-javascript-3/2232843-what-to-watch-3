import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Main} from '../pages/main';
import {SignIn} from '../pages/sign-in';
import {MyList} from '../pages/my-list';
import {Film} from '../pages/film';
import {AddReview} from '../pages/add-review';
import {Player} from '../pages/player';
import {NotFound} from '../pages/not-found';
import {RoutePathname} from '../constants';
import {ScrollToTop} from '../components/scroll-to-top';
import {Provider} from 'react-redux';
import {store} from '../store';
import {SnackbarProvider} from 'notistack';
import {useEffect} from 'react';
import {PrivateRoute} from '../components/private-route';
import {getLogin} from '../store/authorization/api';
import {useAppDispatch} from '../store/hooks';


function Router() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getLogin());
  }, [dispatch]);
  return (
    <Routes>
      <Route path={RoutePathname.main}>
        <Route
          index
          element={<Main/>}
        />
        <Route
          path={RoutePathname.login}
          element={<SignIn/>}
        />
        <Route
          path={RoutePathname.myList}
          element={<PrivateRoute><MyList/></PrivateRoute>}
        />
        <Route
          path={`${RoutePathname.films}/:id`}
          element={<Film/>}
        />
        <Route
          path={`${RoutePathname.films}/:id/${RoutePathname.review}`}
          element={(
            <PrivateRoute navigateTo={`${RoutePathname.login}`}>
              <AddReview/>
            </PrivateRoute>
          )}
        />
        <Route
          path={RoutePathname.player}
          element={<Player/>}
        />
      </Route>
      <Route path={RoutePathname.notFound} element={<NotFound/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <BrowserRouter>
          <ScrollToTop>
            <Router/>
          </ScrollToTop>
        </BrowserRouter>
      </SnackbarProvider>
    </Provider>
  );
}

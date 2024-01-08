import {useEffect} from 'react';
import {fetchFilm, fetchFilmSimilar} from '../store/film/api';
import {ReduxStateStatus, RoutePathname} from '../constants';
import {useAppDispatch} from '../store/hooks';
import {useNavigate} from 'react-router-dom';

export function useFetchFilm(id: string) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFilmSimilar(id));
    dispatch(fetchFilm(id))
      .then((res) => {
        if (res.meta.requestStatus === ReduxStateStatus.rejected) {
          navigate(`/${RoutePathname.notFound}`);
        }
      });
  }, [id, navigate, dispatch]);
}

import {useEffect} from 'react';
import {fetchFilm, fetchFilmSimilar} from '../store/api.ts';
import {ReduxStateStatus, RoutePathname} from '../constants.ts';
import {useAppDispatch} from '../store';
import {useNavigate} from 'react-router-dom';

export function useFetchFilm(id: string) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFilmSimilar(id));
    dispatch(fetchFilm(id))
      .then((res) => {
        if (res.meta.requestStatus === ReduxStateStatus.rejected) {
          navigate(`/${RoutePathname.NOT_FOUND}`);
        }
      });
  }, [id, navigate, dispatch]);
}

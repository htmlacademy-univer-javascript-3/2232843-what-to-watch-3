import {useAppSelector} from '../store/hooks';
import {FilmsSelector} from '../store/films/selectors';

export function useFilms() {
  return useAppSelector(FilmsSelector.list);
}

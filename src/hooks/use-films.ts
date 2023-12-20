import {useAppSelector} from '../store';

export function useFilms() {
  return useAppSelector((state) => state.films);
}

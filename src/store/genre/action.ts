import {createAction} from '@reduxjs/toolkit';


const Action = {
  CHANGE_GENRE: 'genre/change',
};

export const changeGenre = createAction(
  Action.CHANGE_GENRE,
  (value: string): { payload: string } => ({
    payload: value
  })
);

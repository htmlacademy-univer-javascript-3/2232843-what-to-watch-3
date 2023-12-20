import {createAction} from '@reduxjs/toolkit';


export const Action = {
  CHANGE_GENRE: 'CHANGE_GENRE'
};

export const changeGenre = createAction(
  Action.CHANGE_GENRE,
  (value: string): {payload: string} => ({
    payload: value
  })
);

import {createAction} from '@reduxjs/toolkit';


const Action = {
  UPDATE_VIDEO_LINK: 'player/updateVideoLink',
} as const;

export const updateVideoLink = createAction(
  Action.UPDATE_VIDEO_LINK,
  (value: string): { payload: string } => ({
    payload: value
  })
);

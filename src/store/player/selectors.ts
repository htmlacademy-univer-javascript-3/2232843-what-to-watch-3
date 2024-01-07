import {State} from '../types';


export const PlayerSelector = {
  videoLink: (state: State) => state.player.videoLink
} as const;

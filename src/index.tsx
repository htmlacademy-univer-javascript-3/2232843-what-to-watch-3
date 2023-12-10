import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app/app.tsx';
import {FILMS} from './mocks/films';
import {PLAYER} from './mocks/player';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
	  films={FILMS}
      player={PLAYER}
    />
  </React.StrictMode>
);

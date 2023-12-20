import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app/app.tsx';
import {PLAYER} from './mocks/player';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      player={PLAYER}
    />
  </React.StrictMode>
);

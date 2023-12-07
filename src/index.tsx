import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app/app.tsx';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      filmGenre="Drama"
      filmPromoDate={2014}
      filmTitle="The Grand Budapest Hotel"
    />
  </React.StrictMode>
);

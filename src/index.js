import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { StateProvider } from './components/helpers/StateProvider'
import reducer, { initialState } from './components/helpers/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


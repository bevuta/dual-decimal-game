import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game.jsx';
import Store from './store/Store.jsx';
import { Provider } from 'react-redux';

const root = document.getElementById('dual-decimal-game-root');

ReactDOM.render(
  <Provider store={Store}>
    <Game />
  </Provider>,
  root
);

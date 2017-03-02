import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, browserHistory } from 'react-router';
import { createCharacter } from './actions/characters'

import routes from './routes';
import './index.css';

import configureStore from './store/configureStore';


const store = configureStore();
console.log(store.getState());

store.dispatch(createCharacter({ name: 'Beavis'}));
console.log(store.getState());



const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);

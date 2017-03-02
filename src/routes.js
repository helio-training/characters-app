import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import HomePage from './containers/common/HomePage';
import NewCharacterPage from './containers/common/characters/NewCharacterPage';
import CharactersPage from './containers/common/characters/CharactersPage';
import NotFoundPage from './containers/common/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="characters" component={CharactersPage}/>
    <Route path="characters/new" component={NewCharacterPage}/>
    <Route path="*" component={NotFoundPage} />
  </Route>
)

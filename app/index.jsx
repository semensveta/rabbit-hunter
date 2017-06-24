require('./scss/index.scss');

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { rabbitLocation } from './redusers/rabitLocation.reduser';
import { hunters, hunting } from './redusers/hunters.reduser';
import Forest from './components/forest/forest.jsx';
import HunterForm from './components/forms/hunter-form.jsx';
import Nav from './components/Nav/nav.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const commonReducer = combineReducers({
  rabbitLocation: rabbitLocation,
  hunters: hunters,
  hunting: hunting
});

let store = createStore(commonReducer);
render (
    <Provider store={store}>
      <Router >
        <div>
          <Nav/>
          <Route exact path="/" component={Forest}/>
          <Route path="/add"  component={HunterForm}/>
        </div>
      </Router>
    </Provider>,
  document.getElementById('mount')
)

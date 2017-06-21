require('./scss/index.scss');

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { rabbitLocation } from './redusers/rabitLocation.reduser';
import { hunters } from './redusers/hunters.reduser';
import Forest from './components/forest/forest.jsx';

const commonReducer = combineReducers({
  rabbitLocation: rabbitLocation,
  hunters: hunters
});
let store = createStore(commonReducer);
render (
    <Provider store={store}>
        <Forest store={store}/>
    </Provider>,
  document.getElementById('mount')
)

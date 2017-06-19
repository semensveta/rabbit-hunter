require('./scss/index.scss');

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rabbitLocation } from './redusers/rabitLocation.reduser';
import Forest from './components/forest/forest.jsx';

let store = createStore(rabbitLocation, {x: 0, y: 0});
render (
    <Provider store={store}>
        <Forest store={store}/>
    </Provider>,
  document.getElementById('mount')
)

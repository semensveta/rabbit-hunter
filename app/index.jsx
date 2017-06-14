require('./scss/index.scss');

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { list } from './redusers/myReduser';
import App from './components/App/App.jsx';

let store = createStore(list, [1,2,3,4,5]);
render (
    <Provider store={store}>
        <App store={store}/>
    </Provider>,
  document.getElementById('mount')
)

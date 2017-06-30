require('./scss/index.scss');

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { deviceProto } from './redusers/device-proto.reduser';
import { hunters } from './redusers/hunters.reduser';
import DeviceForm from './components/forms/hunter-form.jsx';


const commonReducer = combineReducers({
  deviseProto: deviceProto
});

let store = createStore(commonReducer);
render (
    <Provider store={store}>
      <DeviceForm />
    </Provider>,
  document.getElementById('mount')
);

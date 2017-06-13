import React from 'react'
//import Header from "../header/index";
import Dashboard from '../dashboard/dashboard.jsx';
// import Appliance from '../appliance/dashboard.jsx';
import Header from '../header/index.jsx';
import Navigation from '../nav/nav.jsx';
import TestComponent from '../test/index.jsx';
// import Plan from '../plan/dashboard.jsx';
// import TestComponent from '../test/dashboard.jsx';

export default class Layout extends React.Component {
    render () {
        return (
            <div>
                Hello!!
                <Header/>
                <Navigation/>
                <Dashboard>
                  <TestComponent/>
                </Dashboard>
            </div>
        );
    }
}
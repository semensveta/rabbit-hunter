import React from 'react'
//import Header from "../header/index";
import Dashboard from '../dashboard/dashboard.jsx';
// import Appliance from '../appliance/dashboard.jsx';
import Header from '../header/index.jsx';
import Navigation from '../nav/nav.jsx';
import TestComponent from '../test/index.jsx';
import { connect } from 'react-redux';
// import Plan from '../plan/dashboard.jsx';

 class Layout extends React.Component {
   constructor(props) {
     super(props)
 }
    render () {
        return (
            <div>
                Hello!!
                <Header/>
                <Navigation/>
                <Dashboard>
                  <TestComponent />
                </Dashboard>
            </div>
        );
    }
}

function mapStateToProps (state) {
  return {
    list: state.list
  }
}

export default connect(mapStateToProps)(Layout)

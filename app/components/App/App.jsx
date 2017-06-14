import React from 'react'
import Layout from "../layout/layout.jsx";
import PropTypes from 'prop-types';

export default class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  constructor () {
    super();
  }

  render () {
    console.log(this);

    return (
      <div>
        APPP!!
       <Layout/>
      </div>
    );
  }
}
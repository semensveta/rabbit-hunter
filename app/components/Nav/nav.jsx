import "./nav.scss"
import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <nav>
        <ul>
          <li><NavLink to="/" activeClassName='active' >Home</NavLink></li>
          <li><NavLink to="/add" activeClassName='active'>Add hunter</NavLink></li>
        </ul>
      </nav>
    );
  }
}

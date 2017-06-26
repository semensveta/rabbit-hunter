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
          <li><NavLink to="/" >Home</NavLink></li>
          <li><NavLink to="/add" >Add hunter</NavLink></li>
        </ul>
      </nav>
    );
  }
}

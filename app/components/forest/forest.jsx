import './forest.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Rabbit from '../rabbit/rabbit.jsx';
import Hunter from '../Hunter/hunter.jsx';


export default class Forest extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="forest">
        <Hunter store={this.props.store}/>
        <Rabbit store={this.props.store}/>
      </div>
    );
  }
}
import "./rabbit.scss"
import React from 'react';
import PropTypes from 'prop-types';
import { runRabbit } from '../../actions/rabbitActions';
import rabbitImg from "../../images/rabbit.png"

export default class Rabbit extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props);

    this.state =  {
      location: props.store.getState()
    };
    this.styles = {
      top: this.state.location.x + 'px',
      left: this.state.location.y + 'px'
    };
  }

  run () {
    this.props.store.dispatch(runRabbit());
    let newLocation = this.props.store.getState();
    this.styles = {
      top: newLocation.x + 'px',
      left: newLocation.y + 'px'
    };
    this.forceUpdate();
  }

  render () {
     return (
        <div className="rabbit" style = {this.styles} >
          <img onClick={this.run.bind(this)} src={rabbitImg} />
          <button onClick={this.run.bind(this)}>Run</button>
        </div>
    );
  }
}
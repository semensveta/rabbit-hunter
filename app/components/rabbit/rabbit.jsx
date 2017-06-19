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
    const x = Math.floor(Math.random() * 200);
    const y = Math.floor(Math.random() * 200);
    this.styles = {
      top: x + 'px',
      left: y + 'px'
    };
    const location = {
      x,
      y
    };
    this.setState({
      location
    });

    this.props.store.dispatch(runRabbit(location));
  }

  render () {
     return (
        <div style = {this.styles} >
          <img src={rabbitImg} />
          <button onClick={this.run.bind(this)}>Run</button>
        </div>
    );
  }
}
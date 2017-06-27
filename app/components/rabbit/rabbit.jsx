import "./rabbit.scss"
import React from 'react';
import PropTypes from 'prop-types';
import rabbitImg from "../../images/rabbit.png";

export default class Rabbit extends React.Component {
  /*static propTypes = {
    onMove: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
  };*/
  constructor (props) {
    super(props);

    this.styles = {
      top: this.props.location.x + 'px',
      left: this.props.location.y + 'px'
    };
  }

  componentWillReceiveProps(newProps){
    this.props = newProps;
    this.styles = {
      top: this.props.location.x + 'px',
      left: this.props.location.y + 'px'
    };
  }

  render () {
     return (
        <div className="rabbit" style = {this.styles} >
          <img onClick={this.props.onMove} src={rabbitImg} />
          <button onClick={this.props.onMove}>Run</button>
        </div>
    );
  }
}

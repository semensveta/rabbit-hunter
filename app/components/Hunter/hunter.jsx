import "./hunter.scss"
import React from 'react';
import PropTypes from 'prop-types';
import aim from "../../images/hunt.png"

export default class Hunter extends React.Component {
  static propTypes = {
    // store: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    rabbitLocation: PropTypes.any.isRequired,
    miss: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props);
    this.styles = {
      top: '120px',
      left: '120px'
    }

  }
  componentWillMount() {
    this.startHunting();
  }
  componentDidMount() {
    this.stopHunting();
  }

  stopHunting () {    
  }


  startHunting () {
      this.styles = {
        top: this.props.rabbitLocation.x + 10*this.props.miss +'px',
        left: this.props.rabbitLocation.y + 10*this.props.miss + 'px'
      }
    // this.props.store.subscribe(() => {
      // let rabbitLocation = this.props.store.getState().rabbitLocation;
    //   this.styles = {
    //     top: rabbitLocation.x + 10*this.props.miss +'px',
    //     left: rabbitLocation.y + 10*this.props.miss + 'px'
    //   }
    //
    //   setTimeout(() => {this.forceUpdate()}, 500);
    //
    // });
  }

  render () {
    return (
        <div className="hunter" style = {this.styles}>
           <img src={aim} />
        </div>
    );
  }
}

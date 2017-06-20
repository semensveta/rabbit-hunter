import "./hunter.scss"
import React from 'react';
import PropTypes from 'prop-types';
import aim from "../../images/hunt.png"

export default class Hunter extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
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
    this.props.store.subscribe(() => {});
  }


  startHunting () {
    this.props.store.subscribe(() => {
      console.log(this.props.store.getState());
      let rabbitLocation = this.props.store.getState();
      this.styles = {
        top: rabbitLocation.x + 10*this.props.miss +'px',
        left: rabbitLocation.y + 10*this.props.miss + 'px'
      }

      setTimeout(() => {this.forceUpdate()}, 500);

    });
  }

  render () {
    console.log(this.styles);
     return (
        <div className="hunter" style = {this.styles}>
           <img src={aim} />
        </div>
    );
  }
}
import React from 'react';
import PropTypes from 'prop-types';
import aim from "../../images/hunt.png"

export default class Hunter extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props);

   /* this.state =  {
      position: props.store.getState()
    };*/
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
        top: rabbitLocation.x + 'px',
        left: rabbitLocation.y + 'px'
      }

      setTimeout(() => {this.forceUpdate()}, 500);

    });
  }

  render () {
    console.log(this.styles);
     return (
        <div style = {this.styles}>
           <img src={aim} />
        </div>
    );
  }
}
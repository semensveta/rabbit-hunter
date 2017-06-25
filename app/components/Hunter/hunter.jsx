import "./hunter.scss"
import React from 'react';
import aim from "../../images/hunt.png";

export default class Hunter extends React.Component {
  constructor (props) {
    super(props);
    this.styles = {
      top: this.props.rabbitLocation.x + 'px',
      left: this.props.rabbitLocation.y + 'px'
    }
  }

  componentWillReceiveProps(newProps){

    setTimeout(() => {
      this.styles = {
      top: newProps.rabbitLocation.x + this.props.miss *10 +'px',
      left: newProps.rabbitLocation.y + this.props.miss *10 +'px'
    }
    this.forceUpdate();
    },500)


  }

  render () {
    return (
        <div className="hunter" title = {'hunter ' + this.props.name} style = {this.styles}>
           <img src={aim} />
        </div>
    );
  }
}


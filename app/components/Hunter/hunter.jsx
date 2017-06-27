import "./hunter.scss"
import React from 'react';
/*import aim from "../../images/hunt.png";
import aim1 from "../../images/hunt1.png";
import aim2 from "../../images/hunt2.png";*/


export default class Hunter extends React.Component {
  constructor (props) {
    super(props);
    this.styles = {
      top: this.props.location.x + 'px',
      left: this.props.location.y + 'px'
    }
  }

  componentWillReceiveProps(newProps){
    setTimeout(() => {
      this.styles = {
      top: newProps.location.x + 'px',
      left: newProps.location.y + 'px'
    };
    this.forceUpdate();
    },500)
  }

  render () {
    return (
        <div className="hunter" title = {'hunter ' + this.props.name} style = {this.styles}>
           <img src={this.props.weapon} />
        </div>
    );
  }
}


import React from 'react';
import './appliance.scss';

export default class Appliance extends React.Component {
    static propTypes = {
      appliances: React.PropTypes.arrayOf(Object)
    }
    constructor () {
      super();
    }

    constructAplList () {
      const appliances = this.props.appliances;
      const listItems = appliances.map((item) =>
        <li>{item.name}</li>
    );
      return (
        <ul>{listItems}</ul>
    );
    }

  render () {
    return (
       <div className="appliance">
           { this.constructAplList()}
      </div>
    );
  }
}

import React from 'react';
import './test.scss';
import { createStore } from 'redux';
import { list } from '../../redusers/myReduser.js';

let store = createStore(list, [1,2,3,4,5]);
console.log(store);

export default class TestComponent extends React.Component {

    constructor (props) {
      super(props);

      this.state = {
        numbers: store.getState()
      };

     this.eventHandler = this.eventHandler.bind(this);
    }

    numberList() {
      const numbers = this.state.numbers;
      const listItems = numbers.map((number) =>
          <li>{number}</li>
      );
      return (
          <ul>{listItems}</ul>
      );
    }

    eventHandler () {
      this.props.actions.addItem;
      console.log(this);
      /*this.setState((prevState) =>
      prevState.numbers.push(
          prevState.numbers[prevState.numbers.length - 1] + 1));
      console.log('HI,event!');*/
    };

  render () {
    return (
       <div className="test">
        {this.numberList()}
        <button onClick={this.eventHandler}>Add item</button>
      </div>
    );
  }
}

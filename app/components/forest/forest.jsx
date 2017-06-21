import './forest.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Rabbit from '../rabbit/rabbit.jsx';
import Hunter from '../Hunter/hunter.jsx';
import { addHunter } from '../../actions/rabbitActions';
import HunterForm from '../forms/hunter-form.jsx';



export default class Forest extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  constructor (props) {
    super(props);
    this.state = {
      hunters: props.store.getState().hunters
    };

  }
  componentWillMount() {
    this.props.store.subscribe(() => {
      this.state.hunters = this.props.store.getState().hunters;
      this.forceUpdate();
    })
  }

  getHunters () {
    const hunters = this.state.hunters;
    const huntersList = hunters.map((hunter) =>
      <Hunter
        store={this.props.store}
        name = {hunter.name}
        age = {hunter.age}
        miss = {hunter.miss}/>
    );
    return huntersList;
  }

  addHunter(hunter) {
    this.props.store.dispatch(addHunter(hunter));
  }

  render () {
    return (
      <div className="forest">
        <div className="glade">
          {this.getHunters()}
          <Rabbit store={this.props.store}/>
        </div>
        <HunterForm onAdd={this.addHunter.bind(this)} />
      </div>
    );
  }
}
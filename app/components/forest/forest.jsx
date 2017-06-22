import './forest.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Rabbit from '../rabbit/rabbit.jsx';
import Hunter from '../Hunter/hunter.jsx';
import { addHunter } from '../../actions/rabbitActions';
import HunterForm from '../forms/hunter-form.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Forest extends React.Component {
  constructor (props) {
    super(props);
    console.log(this);
    this.state = {
      hunters: props.hunters
    };

  }
  componentWillMount() {
    // this.state.hunters.subscribe(() => {
    //   this.state.hunters = this.props.store.getState().hunters;
    //   this.forceUpdate();
    // })
  }

  getHunters () {
    const hunters = this.state.hunters;
    const huntersList = hunters.map((hunter) =>
      <Hunter
        // store={this.props.store}
        name = {hunter.name}
        age = {hunter.age}
        rabbitLocation = {{x: 5, y: 5}}
        miss = {hunter.miss}/>
    );
    return huntersList;
  }

  // addHunter(hunter) {
  //   this.props.store.dispatch(addHunter(hunter));
  // }


  render () {
    return (
      <div className="forest">
        <div className="glade">
          {this.getHunters()}
          {/*<Rabbit store={this.props.store}/>*/}
        </div>
        <HunterForm onAdd={this.props.addHunterAction} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    hunters: state.hunters
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addHunterAction: bindActionCreators(addHunter, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Forest)
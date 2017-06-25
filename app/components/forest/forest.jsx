import './forest.scss';
import React from 'react';
import Rabbit from '../rabbit/rabbit.jsx';
import Hunter from '../Hunter/hunter.jsx';
import { runRabbit } from '../../actions/rabbitActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Forest extends React.Component {
  constructor (props) {
    super(props);
  }

  getHunters () {
    return this.props.hunters.map((hunter, index) =>
      <Hunter
        key = {index}
        name = {hunter.name}
        age = {hunter.age}
        rabbitLocation = {this.props.rabbitLocation}
        miss = {hunter.miss}/>
    );
  }

  render () {
    return (
       <div className="forest">
        <div className="glade">
          {this.getHunters()}
          <Rabbit onMove={this.props.runRabbit} location={this.props.rabbitLocation}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    hunters: store.hunters,
    rabbitLocation: store.rabbitLocation
  }
}
function mapDispatchToProps(dispatch) {
  return {
    runRabbit: bindActionCreators(runRabbit, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Forest)
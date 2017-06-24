import "./hunter.scss"
import React from 'react';
import PropTypes from 'prop-types';
import aim from "../../images/hunt.png"
import { hunt} from '../../actions/rabbitActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class Hunter extends React.Component {
  constructor (props) {
    super(props);
    this.styles = {
      top: this.props.rabbitLocation.x + 'px',
      left: this.props.rabbitLocation.y + 'px'
    }
  }

  componentWillReceiveProps(newProps){
    this.styles = {
        top: newProps.rabbitLocation.x + this.props.miss *10 +'px',
        left: newProps.rabbitLocation.y + this.props.miss *10 +'px'
      };
  }

  render () {
    return (
        <div className="hunter" title = {'hunter ' + this.props.name} style = {this.styles}>
           <img src={aim} />
        </div>
    );
  }
}
/*function mapStateToProps(store) {
  return {
    rabbitLocation: store.rabbitLocation
  }
}
function mapDispatchToProps(dispatch) {
  return {
    hunt: bindActionCreators(hunt, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Hunter)*/

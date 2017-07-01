import "./hunter-form.scss"
import React from 'react';
import { bindActionCreators } from 'redux';
import { addItem, setValue, resetProto } from '../../actions/deviceProtoActions';
import { connect } from 'react-redux';

const itemsToChoose = [
  'Toggle',
  'Timer',
  'Graph',
  'Value',
  'Range'
];
let id = 0;

class DeviceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  };

  setId = () => {
    return id++;
    /*return (function() {
      return id++;
    })();*/
  };

  addItem = (e) => {
    const newItem = {
      id: this.setId(),
      name: e.target.value
    };
    this.props.addItem(newItem);
  };

  createButton = (label,index) => (
    <p>
      <input
        type = "button"
        key = { index }
        onClick={ this.addItem }
        value={label}
        />
    </p>
  );

  createButtons = () => (
    itemsToChoose.map(this.createButton)
  );

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.props.setValue(name,value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let newDevice = JSON.stringify(this.props.deviceProto);

    //add sending newDevice
    console.log(this.props.deviceProto);
    this.resetForm();
    console.log(newDevice);

    console.log(this.props.deviceProto);
  };

  resetForm() {
    this.setState({
      name: ''
    });
    this.props.resetProto();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add new device</h3>

        <div>
        <label>Name:</label> <br />
        <input name="name" type="text" value={this.state.name}
               onChange={this.handleUserInput} />
        </div>
        <div>
         <label>Location:</label> <br />
          <select name="location" value={this.state.value} onChange={this.handleUserInput}>
            <option value="living room">Living room</option>
            <option value="bedroom">Bedroom</option>
            <option value="kitchen">Kitchen</option>
            <option value="bathroom">Bathroom</option>
          </select>
        </div>
        <div>
          Device config:
          { this.createButtons() }
        </div>
        <input type="submit" value="Add" />
        <div>{ this.props.deviceProto.name } </div>
      </form>
    );
  }
}
function mapStateToProps(store) {
  return {
    deviceProto: store.deviceProto
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setValue: bindActionCreators(setValue, dispatch),
    addItem:  bindActionCreators(addItem, dispatch),
    resetProto: bindActionCreators(resetProto, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DeviceForm)
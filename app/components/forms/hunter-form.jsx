import "./hunter-form.scss"
import React from 'react';
import { bindActionCreators } from 'redux';
import { addItem, changeName, changeLocation } from '../../actions/deviceProtoActions';
import { connect } from 'react-redux';
import Checkbox  from "./checkbox.jsx";
import addForm from '../forms/add-form.jsx';

const itemsToChoose = [
  'Toggle',
  'Timer',
  'Graph',
  'Value',
  'Range'
];

class DeviceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    };

  addItem = (e) => {
      const newItem = {
      id:3,
      name: e.target.value
    }
    this.state.items.push(newItem);
    console.log(this.state.items);
    this.props.addItem(newItem);
  }

  createButton = (label,index) => (
    <p>
      <input
        type = "button"
        key = { index }
        onClick={this.addItem}
        value={label}
        />
    </p>
  )

  createButtons = () => (
    itemsToChoose.map(this.createButton)
  )


  handleUserInput = (e) => {
    console.log('this works!');
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
        [name]: value
      });
    };


    handleSubmit = (e) => {
        e.preventDefault();
      for (const checkbox of this.selectedCheckboxes) {
        console.log(checkbox, 'is selected.');
      }
          this.resetForm();
    }


    resetForm() {
      this.setState({
        name: ''
      })
    };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add new appliance</h3>

        <div>
        <label>Name:</label> <br />
        <input name="name" type="text" value={this.state.name}
               onChange={this.handleUserInput} />
        </div>
        <div>
         <label>Location:</label> <br />
          <select value={this.state.value} onChange={this.handleUserInput}>
            <option value="living room">Living room</option>
            <option value="bedroom">Bedroom</option>
            <option value="kitchen">Kitchen</option>
            <option value="bathroom">Bathroom</option>
          </select>
        </div>
        <div>
          Appliance config:
          { this.createButtons() }
        </div>
        <input type="submit" value="Add" />
        <div>{ this.props.deviseProto } </div>
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
    changeLocation: bindActionCreators(changeLocation, dispatch),
    addItem:  bindActionCreators(addItem, dispatch),
    changeName:  bindActionCreators(changeName, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DeviceForm)
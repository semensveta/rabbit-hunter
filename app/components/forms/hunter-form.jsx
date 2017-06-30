import "./hunter-form.scss"
import React from 'react';
import { bindActionCreators } from 'redux';
import { addHunter } from '../../actions/rabbitActions';
import { connect } from 'react-redux';
import Checkbox  from "./checkbox.jsx";
import addForm from '../forms/add-form.jsx';

const checkboxItems = [
  'On/off',
  'Timer',
  'Power consumption',
  'Status'
];


class HunterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    };
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  )

  createCheckboxes = () => (
    checkboxItems.map(this.createCheckbox)
  )


  handleUserInput = (e) => {
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
          <label>Type:</label> <br />
           <select value={this.state.value} onChange={this.handleUserInput}>
            <option value="tv">TV</option>
            <option value="oven">Oven</option>
            <option value="dishwasher">Dishwasher</option>
            <option value="washing">Washing machine</option>
          </select>
          <br />
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
          { this.createCheckboxes() }
        </div>
        <input type="submit" value="Add" />
        <addForm />
      </form>

    );
  }
}
function mapStateToProps(store) {
  return {
    hunters: store.hunters
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addHunterAction: bindActionCreators(addHunter, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HunterForm)
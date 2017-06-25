import "./hunter-form.scss"
import React from 'react';
import { bindActionCreators } from 'redux';
import { addHunter } from '../../actions/rabbitActions';
import { connect } from 'react-redux';

class HunterForm extends React.Component {

  constructor (props) {
    super(props);
    console.log(props);
    let name = props.name || '';
    let nameIsValid = HunterForm.validateName(name);
    let age = props.age;
    let ageIsValid = HunterForm.validateAge(age);
    let miss = props.miss;
    this.state = {name: name, age: age, miss: miss, nameValid: nameIsValid, ageValid: ageIsValid};

    this.onNameChange = this.onNameChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
    this.onMissChange = this.onMissChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static validateAge(age) {
    return 0 < age && 100 > age;
  }

  static validateName(name) {
    return name.length > 2;
  }

  onAgeChange(e) {
    let val = e.target.value;
    let valid = HunterForm.validateAge(val);
    console.log(valid);
    this.setState({age: val, ageValid: valid});
  }

  onNameChange(e) {
    let val = e.target.value;
    let valid = HunterForm.validateName(val);
    this.setState({name: val, nameValid: valid});
  }

  onMissChange(e) {
    let val = e.target.value;
    this.setState({miss: val})
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.nameValid === true && this.state.ageValid === true){
      let hunter = {
        name: this.state.name,
        age: this.state.age,
        miss: this.state.miss,
        location: {
          x: 5,
          y: 5
        }
      };
      this.props.addHunterAction(hunter);
      this.resetForm();
    }
  }

  resetForm() {
    this.setState({
        name: '',
        age: '',
        miss: '',
        nameValid: false,
        ageValid: false
      })
  }

  render() {
    let nameInputClass = this.state.nameValid === true ? "green":"red";
    let ageInputClass = this.state.ageValid === true ? "green":"red";

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Добавить охотника</h3>
        <p>
          <label>Имя:</label><br />
          <input className={nameInputClass} type="text" value={this.state.name}
                 onChange={this.onNameChange} />
        </p>
        <p>
          <label>Возраст:</label><br />
          <input type="text" pattern="[0-9]{1,2}" value={this.state.age}
                 onChange={this.onAgeChange} className={ageInputClass} />
        </p>
        <p>
          <label>Мажет на:</label><br />
          <input type="text" pattern="[0-9)" value={this.state.miss}
                 onChange={this.onMissChange} />
           м
        </p>

        <input type="submit" value="Добавить" />
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
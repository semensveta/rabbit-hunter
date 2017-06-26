import "./hunter-form.scss"
import React from 'react';
import { bindActionCreators } from 'redux';
import { addHunter } from '../../actions/rabbitActions';
import { connect } from 'react-redux';
import aim from "../../images/hunt.png";
import aim1 from "../../images/hunt1.png";
import aim2 from "../../images/hunt2.png";

class HunterForm extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      miss: '',
      nameValid: false,
      ageValid: false,
      weapon: ''};
  }

  static validateAge(age) {
    return 0 < age && 100 > age;
  }

  static validateName(name) {
    return name.length > 2;
  }

  onAgeChange = (e) => {
    let val = e.target.value;
    let valid = HunterForm.validateAge(val);
    this.setState({age: val, ageValid: valid});
  }

  onNameChange = (e) => {
    let val = e.target.value;
    let valid = HunterForm.validateName(val);
    this.setState({name: val, nameValid: valid});
  }

  onMissChange = (e) => {
    let val = e.target.value;
    this.setState({miss: val})
  }

  onRadioChange = (e) => {
    this.setState({weapon: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.nameValid === true && this.state.ageValid === true){
      let hunter = {
        name: this.state.name,
        age: this.state.age,
        miss: this.state.miss,
        location: {
          x: 5,
          y: 5
        },
        weapon: this.state.weapon
      };
      console.log(hunter);
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
      ageValid: false,
      weapon: ''
    })
  }

  render() {
    let nameInputClass = this.state.nameValid === true ? "green":"red";
    let ageInputClass = this.state.ageValid === true ? "green":"red";

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Добавить охотника</h3>
        <div>
        <label>Имя:</label> <br />
        <input className={nameInputClass} type="text" value={this.state.name}
               onChange={this.onNameChange} />
        </div>
        <div>
          <label>Возраст:</label> <br />
          <input type="text" pattern="[0-9]{1,2}" value={this.state.age}
                 onChange={this.onAgeChange} className={ageInputClass} />
        </div>
        <div>
          <label>Мажет на:</label> <br />
          <input type="text" pattern="[0-9)" value={this.state.miss}
                 onChange={this.onMissChange} />
           <span>м</span>
        </div>
        <div>
          <p><labe>Оружие:</labe></p>
            <img className="radio-image" src={aim} />
            <input type="radio" name="weapon" value={aim}
                   onChange={this.onRadioChange} /> < br />
            <img className="radio-image" src={aim1} />
            <input type="radio" name="weapon"  value={aim1}
                   onChange={this.onRadioChange} /> < br />
            <img className="radio-image" src={aim2} />
            <input type="radio" name="weapon" value={aim2}
                   onChange={this.onRadioChange} /> < br />
        </div>
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
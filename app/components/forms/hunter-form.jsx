import "./hunter-form.scss"
import React from 'react';
import { bindActionCreators } from 'redux';
import { addHunter } from '../../actions/rabbitActions';
import { connect } from 'react-redux';
import aim from "../../images/hunt.png";
import aim1 from "../../images/hunt1.png";
import aim2 from "../../images/hunt2.png";

class HunterForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            miss: '',
            nameValid: false,
            ageValid: false,
            weapon: '',
            formErrors: []
        };
    };

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
        this.validateField(name, value);
    }
    validateField = (fieldName, value) => {
        let nameValid = this.state.nameValid;
        let ageValid = this.state.ageValid;
        let fieldValidationErrors = this.state.formErrors;

        switch(fieldName) {
            case 'age':
                ageValid = 0 < value && 100 > value;
                fieldValidationErrors.age = ageValid ? '' : 'age is invalid!';
                break;
            case 'name':
                nameValid = value.length > 2;
                fieldValidationErrors.name = nameValid ? '' : 'name is to short!';
                break;
            default:
                break;
        }
        this.setState({
            nameValid: nameValid,
            ageValid: ageValid,
            formErrors: fieldValidationErrors,
        });
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
          this.props.addHunterAction(hunter);
          this.resetForm();
        }
    };

    resetForm() {
    this.setState({
      name: '',
      age: '',
      miss: '',
      nameValid: false,
      ageValid: false,
      weapon: ''
    })
    };

 /* getErrors = (formErrors) => {
      console.log(formErrors);
      Object.keys(formErrors).map((fieldName, i) => {
          if(formErrors[fieldName].length > 0){
              console.log('error!');
              return (
                  <p key={i}>{fieldName} {formErrors[fieldName]}</p>
              )
          } else {
              return '';
          }
      })
  };*/


  render() {
    let nameInputClass = this.state.nameValid === true ? "green":"red";
    let ageInputClass = this.state.ageValid === true ? "green":"red";

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Добавить охотника</h3>
        <div className = "errors">
            <p>{this.state.formErrors.name}</p>
            <p>{this.state.formErrors.age}</p>
        </div>
        <div>
        <label>Имя:</label> <br />
        <input className={nameInputClass} name="name" type="text" value={this.state.name}
               onChange={this.handleUserInput} />
        </div>
        <div>
          <label>Возраст:</label> <br />
          <input type="text" pattern="[0-9]{1,2}" name="age" value={this.state.age}
                 onChange={this.handleUserInput} className={ageInputClass} />
        </div>
        <div>
          <label>Мажет на:</label> <br />
          <input type="text"  pattern="[0-9]" name="miss" value={this.state.miss}
                 onChange={this.handleUserInput} />
           <span>м</span>
        </div>
        <div>
          <p><labe>Оружие:</labe></p>
            <img className="radio-image" src={aim} />
            <input type="radio" name="weapon" value={aim}
                   onChange={this.handleUserInput} /> < br />
            <img className="radio-image" src={aim1} />
            <input type="radio" name="weapon"  value={aim1}
                   onChange={this.handleUserInput} /> < br />
            <img className="radio-image" src={aim2} />
            <input type="radio" name="weapon" value={aim2}
                   onChange={this.handleUserInput} /> < br />
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
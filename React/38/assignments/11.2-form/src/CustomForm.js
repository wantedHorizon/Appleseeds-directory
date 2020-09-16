import React, { Component } from 'react';
import ConfirmForm from './components/confirmForm';
import CustomInput from './components/customInput';

const defaultInputs = [
{ value: "", name: 'firstname', label: 'First Name:', type: 'input', inputType: "text" },
{ value: "", name: 'lastname', label: 'Last Name:', type: 'input', inputType: "text" },
{ value: "", name: 'age', label: 'Age:', min: 0, max: 99, type: 'select' },
{ value: "", name: 'freeText', label: 'Free Text:', type: 'textArea' },
{ value: "", name: 'confirm1', label: 'I accept the compony terms.', checked: false, type: 'input', inputType: 'checkbox' }

]
class CustomForm extends Component {
  state = {
    inputs: defaultInputs.slice(),
    displayFormConfirm: false //false=form , true="confirmSubmit"
  }
  componentDidMount = () => {
    //check for previous state
    const items = JSON.parse(window.localStorage.getItem('inputs'));
    if(items){
      this.setState({ inputs: items });
    }
   //set event listener to save localinputs on exit
    window.addEventListener('beforeunload', this.handleWindowClose);
  }
  componentWillUnmount = () => {
    //remove event listener
    window.removeEventListener('beforeunload', this.handleWindowClose);
  }

  //parse form to <p>
  formParser = () => {
    const strArr = this.state.inputs
      .filter(input => input.name !== 'confirm1')
      .map(({ label, value },i) => { return <p key={i}>{label} {value}</p> })
      
    return strArr;
  }
  mapStateToInput = () => {
    const inputs = this.state.inputs.map((inputObject, index) => {

      return <CustomInput inputObject={inputObject} key={index} index={index} onChangeHandler={(e) => this.onChangeHandler(e, index)} />

    }

    );
    return inputs;
  }

 

  //Events
  
 //save locale on exit
 handleWindowClose = () => {
  window.localStorage.setItem('inputs', JSON.stringify(this.state.inputs));
  // window.history.forward()
}
  onChangeHandler = (e, index) => {

    const newInputs = JSON.parse(JSON.stringify(this.state.inputs));

    const toUpdate = newInputs[index];

    if (toUpdate.inputType === 'checkbox') {
      toUpdate.checked = !toUpdate.checked;

    } else {
      toUpdate.value = e.target.value;
    }
    this.setState({ inputs: newInputs });



  }
  onFormSubmitHandler = (e) => {
    e.preventDefault();
    if (!e.target.confirm1.checked) {
      alert("Please accept the terms");
      return;
    }

    this.setState({displayFormConfirm:true});
    
    



  }
  onConfirmSubmit = (e) => {
      this.setState({inputs:defaultInputs.slice(), displayFormConfirm: false});
      console.log('submitted');
  
  }
  onConfirmDecline = (e) => {
    this.setState({ displayFormConfirm: false});
    alert("You can now change the form");

}
  

  render() {
    let displayFormConfirm;
    if(this.state.displayFormConfirm){
      displayFormConfirm= <ConfirmForm msg={this.formParser() } submitHandler={this.onConfirmSubmit} declinedHandler={this.onConfirmDecline} />
    } else {
      const inputs = this.mapStateToInput();
      displayFormConfirm = (
        <>
        {inputs}
        <button type="ul submit" style={{ padding: '5px 10px' }} onSubmit={this.onFormSubmitHandler}>Submit</button>
        </>
      );
    }
    return (
      <div className="CustomForm">
        <form action="" className="ui inverted form " style={{ background: 'black', padding: '10px', borderRadius: '15px' }} onSubmit={this.onFormSubmitHandler}>
          {displayFormConfirm}
        </form>
      </div>
    );

  }
}

export default CustomForm;

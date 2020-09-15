import React, { Component } from 'react';
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
    inputs: defaultInputs.slice()
  }
  componentDidMount = () => {
    const items = JSON.parse(window.localStorage.getItem('inputs'));
    this.setState({ inputs: items });
    window.addEventListener('beforeunload', this.handleWindowClose);
  }
  componentWillUnmount = () => {
    window.removeEventListener('beforeunload', this.handleWindowClose);
  }
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
  formParser = () => {
    const str = this.state.inputs
      .filter(input => input.name !== 'confirm1')
      .map(({ label, value }) => { return `${label} '${value}'` })
      .join('\n');
    return str;
  }
  onFormSubmitHandler = (e) => {
    e.preventDefault();
    if (!e.target.confirm1.checked) {
      alert("Please accept the terms");
      return;
    }

    if (window.confirm(`Are you sure, you want to submit this form: ${this.formParser()}`)) {
      this.setState({inputs:defaultInputs.slice()})
      console.log('submitted');
    } else {
      alert('You can update the form ');
    }



  }

  mapStateToInput = () => {
    const inputs = this.state.inputs.map((inputObject, index) => {

      return <CustomInput inputObject={inputObject} key={index} index={index} onChangeHandler={(e) => this.onChangeHandler(e, index)} />

    }

    );
    return inputs;
  }

  render() {
    const inputs = this.mapStateToInput();
    return (
      <div className="CustomForm">
        <form action="" className="ui inverted form " style={{ background: 'black', padding: '10px', borderRadius: '15px' }} onSubmit={this.onFormSubmitHandler}>
          {inputs}
          <button type="ul submit" style={{ padding: '5px 10px' }} onSubmit={this.onFormSubmitHandler}>Submit</button>
        </form>
      </div>
    );

  }
}

export default CustomForm;

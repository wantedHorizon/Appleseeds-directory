import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    checkbox: [
      { name: 'confirm1', label: 'I read the term of the app', checked: false },
      { name: 'confirm2', label: 'I accept the term of the app', checked: false },
      { name: 'confirm3', label: 'I want to get weekly news letter', checked: true },
      { name: 'confirm4', label: 'I want to get sales and offers', checked: true }

    ]
  }

  onCheckboxChangedHandler = (e,index) => {
    const newCheckbox = JSON.parse(JSON.stringify(this.state.checkbox));
    newCheckbox[index].checked = !newCheckbox[index].checked;
    this.setState({checkbox:newCheckbox});
    
    

  }

  render() {
    const checkboxes = this.state.checkbox.map((cb, index) => (
      <div className="field" key={index}>
        <input type="checkbox"
          id={cb.name}
          name={cb.name}
          value={cb.name}
          defaultChecked={cb.checked}
          onChange={(e)=>this.onCheckboxChangedHandler(e,index)}
          style={{marginRight: '10px', verticalAlign:'middle'}}
        />
        <label htmlFor={cb.name}> {cb.label}</label>
      </div>
    )
    )
    return (
      <div className="App">
        <form action="" onSubmit={e=>e.preventDefault()}>
          {checkboxes}
        </form>
      </div>
    );

  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    clickCount: 0
  }
   onIncrementClickHandler = () => {
     const newCtr =  this.state.clickCount+1
      this.setState({clickCount: newCtr})
  }
  render() {
    
  
    return (
      <div className="App">
        <h2>{this.state.clickCount}</h2>
        <button onClick={this.onIncrementClickHandler}>Increment</button>
      </div>

    )
  }

}

export default App;

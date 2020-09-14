import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    visible: false
  }
   onHideSeek = () => {
     const newCtr =  ! this.state.visible;
      this.setState({visible: newCtr})
  }


   
  render() {
    
    let btn;

   
  
    return (
      <div className="App">
        <h2>Hide and Seek</h2>
        <button onClick={this.onHideSeek}>{this.state.visible? "Hide": "Show"}</button>
        {this.state.visible?<div className="box"></div>: null}
      </div>

    )
  }

}

export default App;

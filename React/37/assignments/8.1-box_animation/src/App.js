import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    show: true
  }
  hide = () => {

    this.setState({ show: false })
  }
  render() {
    let box = null;
    if (this.state.show) {
      box = (
        <div className="box">
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="box3"></div>
        </div>
        );
      setTimeout(() => this.hide(), 4000);
    }

    return (
      <div className="App">
        {box}
      </div>

    )
  }

}

export default App;

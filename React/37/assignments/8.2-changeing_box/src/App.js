import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    boxBackgroundColor: 'red',
    ctr: 0,
    inter: null
  }

  changeColor = () => {
    let color = '';
    const newCtr = this.state.ctr + 1;
    switch (newCtr % 3) {
      case 0:
        color = 'red';
        break;
      case 1:
        color = 'yellow';
        break;
      case 2:
        color = 'blue';
        break;
      default:
        color = 'err';
        break;
    }
    this.setState({ boxBackgroundColor: color, ctr: newCtr });
  }

  componentDidMount = () => {
    const inter = setInterval(() => {
      this.changeColor();
    }, 1000);
    this.setState({ inter: inter });

  }

  componentDidUpdate = () => {
    if (this.state.ctr > 9 && this.state.inter) {
      clearInterval(this.state.inter);
      this.setState({ inter: null });
    }
  }

  render() {
    const boxClasses = ['box'];
    if (this.state.ctr < 10) {
      boxClasses.push(this.state.boxBackgroundColor);
    }

    if (this.state.ctr > 4) {
      boxClasses.push('circle')
    }


    return (
      <div className="App">
        <div className={boxClasses.join(' ')}></div>
      </div>

    )
  }

}

export default App;

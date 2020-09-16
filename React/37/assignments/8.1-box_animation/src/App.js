import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    show: false
  }
  hide = () => {

    this.setState({ show: false })
  }


  componentDidMount =() => {
    setTimeout(()=>{this.setState({show:true})},1500);
  }

  componentDidUpdate= () => {
    if(this.state.show){
      setTimeout(() => this.hide(), 3000);
    }
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
     
    }

    return (
      <div className="App">
        {box}
      </div>

    )
  }

}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Loader from './components/Loader';

class App extends Component {
  state = {
    isLoading: true
  }

  componentDidMount = () => {
    setTimeout(()=>{
      this.setState({isLoading:false})
    },5000);
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
       {this.state.isLoading ?   <Loader />: <h1>Welcome </h1>} 
      </div>
    );

  }
}

export default App;

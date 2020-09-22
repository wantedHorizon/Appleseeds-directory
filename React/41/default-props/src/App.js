import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './greetings/Greeting';
import FunGreeting from './greetings/FunGreeting';
import Problem from './greetings/Problem';

function App() {
  return (
    <div className="App">
      <h2>Components defaults Props</h2>

      <Greeting />
      <Greeting name="eliran"/>

      <hr/>
      <h2>Functional defaults Props</h2>
      <FunGreeting name="eliran"/>
      <FunGreeting />

    {/* <Problem  age={0}/> */}
    </div>
  );
}

export default App;

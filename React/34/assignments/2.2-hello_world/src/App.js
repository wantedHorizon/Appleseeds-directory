import React from 'react';

import './App.css';


function App() {
  const data = ["hello", "world"];
  const number1 = 5;
const number2 =6;
  
const str = 'I love React!';
  return (
    <div className="App">
      <p>{data.join(' ')}</p>
      <br/>
      <hr/>
      <p>{`${number1} + ${number2} = ${number1+number2}`}</p>
      <br/>
      <hr/>
      <p>{`The string's length is ${str.length}`}</p>
    </div>
  );
}

export default App;

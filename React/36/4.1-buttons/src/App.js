import React from 'react';
import './App.css';
import BtnComponent from './components/BtnComponent';
function App() {


  return (
    <div className="App">
      <BtnComponent  classes={['bold']} name="Important"/>
      <BtnComponent name="Not Important"/>


    </div>
  );
}

export default App;

import React from 'react';

import './App.css';
import BoxComponent from './BoxComponent';

function App() {

  
  return (
    <div className="App">
      <BoxComponent boxDetail="box1" >
      <BoxComponent boxDetail="box2">
          <BoxComponent boxDetail="box3">
              <BoxComponent boxDetail="box4" />
              <BoxComponent boxDetail="box4" />
          </BoxComponent>
        </BoxComponent>
      </BoxComponent>

  
    </div>
  );
}

export default App;

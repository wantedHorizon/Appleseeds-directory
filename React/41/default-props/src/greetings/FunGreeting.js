import React from 'react';
const Greeting = ({name="asgfaga"}) => {
    // const Greeting = (props) => {


    return (
        // <h1>Hello, {name}</h1>
         <h1>Hello, {name}</h1> 

    );

}

// Specifies the default values for props:
  Greeting.defaultProps = {
    name: 'Stranger'
  };



export default Greeting;
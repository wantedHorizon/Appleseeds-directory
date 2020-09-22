import React from 'react';
class Greeting extends React.Component {

    static defaultProps = {
        name: 'static Stranger'
    }
    render() {
      return (
        <h1>Hello, {this.props.name}</h1>
      );
    }
  }
  
  // Specifies the default values for props:
  // Greeting.defaultProps = {
  //   name: 'Stranger'
  // };
  


  export default Greeting;
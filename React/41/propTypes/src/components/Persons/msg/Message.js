import React from 'react';
import PropTypes from 'prop-types';
class Message extends React.Component {
    render() {
      let name = this.props.name;
      let age = this.props.age;
      let sport = this.props.sport;
      let children = this.props.children;
      return (
        <div>
          <h3>
            My name is {name}, I am {age} old and I love playing {sport}{" "}
          </h3>
          <div>{children}</div>
        </div>
      );
    }
  }


  // Message.propTypes = {
  //   name: PropTypes.string,
  //   age: PropTypes.number,
  //   sport: PropTypes.string,
  //   children: PropTypes.element.isRequired
  // };

  export default Message;
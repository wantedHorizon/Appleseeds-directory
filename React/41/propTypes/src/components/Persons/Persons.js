import React, { PureComponent } from 'react';
import PersonFunction from './person-function/PersonFunction';

import Person from './Person/Person';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   // return true;
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  // componentWillUpdate() {

  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');
    const ComponentPersons =  (
      this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age.toString()}
          // age={person.age.toString()}

          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    }) );


    // const functionalPersons =  (
    //   this.props.persons.map((person, index) => {
    //   return (
    //     <PersonFunction
    //       click={() => this.props.clicked(index)}
    //       name={5}
    //       age="5"
    //       // age={person.age.toString()}

    //       key={person.id}
    //       changed={event => this.props.changed(event, person.id)}
    //     />
    //   );
    // }) );

    return ComponentPersons;
  }
}

export default Persons;

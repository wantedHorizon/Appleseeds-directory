import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from '../Person/Person.css';

const PersonFunction = (props) => {

    console.log('[Person.js] rendering...');
    return (
        <Aux>
            <p onClick={props.click}>
                I'm {props.name} and I am {props.age} years old!
        </p>
            <p key="i2">{props.children}</p>
            <input
                key="i3"
                type="text"
                onChange={props.changed}
                value={props.name}
            />
        </Aux>
    );
}


PersonFunction.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default PersonFunction;

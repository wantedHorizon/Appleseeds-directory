
import React from 'react';

const BtnComponent = (props) => {

    return <button className={props.classes ?props.classes.join(' '):null} >{props.name}</button>
}

export default BtnComponent;

import React from 'react';
import './BoxComponent.css';

const BoxComponent = (props) => {
    const classList = ['box'];
    classList.push(props.boxDetail);
    return (
        <div className={classList.join(' ')}>
            {props.children}
        </div>
    )
}

export default BoxComponent;
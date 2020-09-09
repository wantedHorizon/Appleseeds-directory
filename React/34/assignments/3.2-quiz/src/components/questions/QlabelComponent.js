
import React from 'react';


const quizInputComponent = (props) =>  <label  name={props.name} className={props.class} htmlFor={props.htmlFor}>{props.text}</label> ;


export default quizInputComponent;
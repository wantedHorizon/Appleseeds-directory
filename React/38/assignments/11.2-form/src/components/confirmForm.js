import React from 'react';
const confirmForm = props => {
    return(
        <div className="confirm">
            {props.msg}
            <div>
            <h4>Do you wish to submit the form or change it?</h4>
                <button className="ui  button decline" onClick={props.declinedHandler} >change it </button>
                <button className="ui primary button accept" onClick={props.submitHandler} > Submit</button>

            </div>
        </div>
    )
}
export default confirmForm;

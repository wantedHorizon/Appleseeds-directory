import React from 'react';
const confirmForm = props => {
    return(
        <div className="confirm">
            {props.msg}
            <div>
            <h4>Do you wish to submit the form or change it?</h4>
                <button onClick={props.declinedHandler} className="decline">change it </button>
                <button onClick={props.submitHandler} className="accept"> Submit</button>

            </div>
        </div>
    )
}
export default confirmForm;

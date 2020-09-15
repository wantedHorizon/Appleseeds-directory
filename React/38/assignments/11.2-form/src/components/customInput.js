import React from 'react';

const createInput = (inputObject, handler) => {
    switch (inputObject.type) {


        case 'input':
            return (
                <div className="field" >
                    <label htmlFor={inputObject.name}> {inputObject.label}</label>
                    <input type={inputObject.inputType}
                        id={inputObject.name}
                        name={inputObject.name}
                        value={inputObject.value}
                        defaultChecked={inputObject.checked}
                        onChange={handler}
                        style={{ marginRight: '10px', verticalAlign: 'middle' }}
                    />
                </div>
            )

        case 'select':
            const selects = [];

            for (let index = inputObject.min; index < inputObject.max; index++) {

                selects.push(<option key={index} value={index}>{index}</option>)
            }

            return (
                <div className="field" >
                    <label htmlFor={inputObject.name}> {inputObject.label}</label>

                    <select name={inputObject.name} onChange={handler} value={inputObject.value}>
                        {selects}
                    </select>

                </div>
            )

            case 'textArea':
                return (
                    <div className="field" >
                    <label htmlFor={inputObject.name}> {inputObject.label}</label>
                    <br/>
                    <textarea type={inputObject.inputType}
                        cols="50"
                        rows="5"
                        id={inputObject.name}
                        name={inputObject.name}
                        value={inputObject.value}
                        onChange={handler}
                        style={{ marginRight: '10px' }}
                    />
                </div>
                );

        default:
            return null;
    }
}//end createInput

const CustomInput = (props) => {


    const input = createInput(props.inputObject, props.onChangeHandler);
    return input;
}





export default CustomInput;
import React, { Component } from 'react';
class AutoFocusInput extends Component {

    componentDidMount = () => {
        this.nameInput.focus();

    }
    inputFocus = () => {
        this.inputRef.current.focus();
    }
    render() {

        return (
            <div className='AutoFocusInput'>
                <label htmlFor="focusInput">wont focus</label>
                <input type="text" />

                <br />
                <label htmlFor="focusInput">Focused </label>
                <input ref={(input) => { this.nameInput = input; }} type="text" />
            </div>
        );
    }
}
export default AutoFocusInput;

import React, { Component } from 'react';
class CopyTextarea extends Component {

    state ={
        msg: ''
    }
    componentDidMount = () => {
        // this.textareaRef.focus();
        console.log(this.textareaRef);

    }
    selectValue = (e) => {
        // const value = this.textareaRef.value;
        this.textareaRef.select();
        document.execCommand("copy",true, "newValue");
        
        console.log("copyied");
        
        
    }
    render() {

        return (
            <div className='CopyTextarea'>
                <h1>{this.state.msg}</h1>

                <br />
                <label htmlFor="focusInput">Focused </label>
                <textarea ref={(textarea) => { this.textareaRef = textarea; }} type="text" />
                <button onClick={this.selectValue}>Copy</button>
            </div>
        );
    }
}
export default CopyTextarea;
import React, { Component } from 'react';
import '../css/Input.css';

class Input extends Component {
    render() {
        return (
            <form className="Input">
                <label>
                    <p>{this.props.name}</p> <br></br>
                    <input type="text" className="inputData"/>
                </label>
            </form>
        )
    }
}

export default Input;
import React, { Component } from 'react';
//import logo from './logo.svg';
import '../css/AddSelection.css';
import Button from './Button.js'

class AddSelection extends Component {
    render() {
        return (
            <div className="AddSelection">
                <Button name="Добавить подборку" />                
            </div>
        )
    }
}

export default AddSelection;
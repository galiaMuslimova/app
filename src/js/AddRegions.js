import React, { Component } from 'react';
import '../css/AddRegions.css';
import Button from './Button.js';

class AddRegions extends Component {
    render() {
        return (
            <div className="AddRegions">
                <Button name="Добавить регион" />
                <Button name="Добавить страны" />
            </div>
        )
    }
}

export default AddRegions;
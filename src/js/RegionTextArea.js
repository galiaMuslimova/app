import React, { Component } from 'react';
import '../css/RegionTextArea.css';
import Button from './Button.js';

class RegionTextArea extends Component {
    render() {
        return (
            <div className="RegionTextArea">
                <form className="Input">
                <label>
                    Вы можете задать несколько стран или регионов для одной подборки <br></br>
                    <textarea/>
                </label>
            </form>
            </div>
        )
    }
}

export default RegionTextArea;
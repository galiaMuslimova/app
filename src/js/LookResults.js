import React, { Component } from 'react';
import '../css/LookResults.css';
import Button from './Button.js';
import Input from './Input.js';
import Search from './Search.js';

var cities = [
    'Москва',
    'Санкт-Петербург',
    'Екатеринбург',
    'Новосибирск',
    'Казань',
    'Краснодар'
]

class LookResults extends Component {
    render() {
        return (
            <div className="LookResults">   
                <Search name="Ваш город" items={cities} />                
                <Button name="Выбрать"/>
            </div>
        )
    }
}

export default LookResults;
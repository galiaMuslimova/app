import React, { Component } from 'react';
import '../css/Filter.css';
import Button from './Button.js';
import Input from './Input.js';
import Select from './Select.js';

class Filter extends Component {
    render() {
        return (
            <div className="Filter">
                <Input name="Дата вылета" />
                <Input name="На сколько" />
                <Input name="Количество гостей" />
                <Input name="Стоимость тура" />
                <Input name="Категория отелей от" />
                <Input name="Рейтинг TopHotels" />
                <Select value="Тип питания" />
                <Select name="Расположение" />
                <Button name="удалить подборку" />
            </div>
        )
    }
}

export default Filter;
import React, { Component } from 'react';
import '../css/Select.css';

class Select extends Component {
    constructor (props) {
        super(props);
        this.state = {value: this.props.value};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <form className="Select" >
            <label>
              <p>Тип питания</p> <br></br>
              <select value={this.state.value} onChange={this.handleChange} className="selectData">
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
          </form>
        )
    }
}


export default Select;
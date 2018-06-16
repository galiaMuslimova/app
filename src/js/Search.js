import React, { Component } from 'react';
import '../css/Input.css';

class Item extends Component {
    render() {
        return (
            <li>{this.props.name}</li>
        )
    }
}

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            items: []
        };
        this.filterList = this.filterList.bind(this);
        this.checkItem = this.checkItem.bind(this);
    }
    filterList(event) {
        let filteredList = this.props.items.filter(function (item) {
            return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        let checkCity = event.target.value;
        this.setState({
            items: [],
            loading: true
        })
        setTimeout(() =>{            
            this.setState({
                city: checkCity,
                items: filteredList,
                loading: false
            })
        }
        ,1000);

        
    }
    checkItem(event) {
        console.log(event.target.innerHTML);
        this.setState({
            city: event.target.innerHTML,
            items: []
        })
    }
    render() {
        let loading = true;
        if(this.state.loading == true){
            loading = <div>loading</div>;
        }
        return (
            <div className="Input">
                <form>
                    <label>
                        <p>{this.props.name}</p> <br></br>
                        <input onChange={this.filterList} value={this.state.city} className="inputData" />
                    </label>
                </form>
                {loading}           
                <ul  onClick={this.checkItem} className="absolutePosition">
                    {
                        this.state.items.map(function (item) {
                            return <Item key={item} name={item} />
                        })
                    }
                </ul>
            </div>
        )
    }

}

export default Search;
import React, { Component } from 'react';
import './css/App.css';
import AddSelection from './js/AddSelection.js';
import LookResults from './js/LookResults.js';
import RegionTextArea from './js/RegionTextArea.js';
import AddRegions from './js/AddRegions.js';
import Filter from './js/Filter.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="App-main">
        <AddSelection />
          <div className="divider" />
          <div className="container">
            
            <LookResults />
            <RegionTextArea />
            <AddRegions />
            <Filter />
          </div>
        </main>
      </div>
    );
  }
}

export default App;

import React from 'react';
import HelloWorld from './components/HelloWorld/';
import NominatimResults from './components/NominatimResults/';
import OverpassResults from './components/OverpassResults/';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HelloWorld name="World !" />
        NominatimResults
        <NominatimResults />
        OverpassResults
        <OverpassResults />
      </div>
    );
  }
}

export default App;

import React from 'react';
import HelloWorld from './components/HelloWorld/';
import Nominatim from './components/Nominatim/';
import OverpassResults from './components/OverpassResults/';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HelloWorld name="World !" />
        Nominatim
        <Nominatim />
        OverpassResults
        <OverpassResults />
      </div>
    );
  }
}

export default App;

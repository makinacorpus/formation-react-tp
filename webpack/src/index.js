import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class HelloWorld extends React.Component {
  render() {
    return (
      <div className="HelloWorld">Hello {this.props.name}</div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HelloWorld name="World !" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

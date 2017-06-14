import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return (
      <div className="HelloWorld">Hello {this.props.name}</div>
    );
  }
}

export default HelloWorld;

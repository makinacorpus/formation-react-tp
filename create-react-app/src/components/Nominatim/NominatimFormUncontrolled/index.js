import React from 'react';

class NominatimFormUncontrolled extends React.Component {
  render() {
    return (
      <form className="NominatimFormUncontrolled">
        <label htmlFor="search">Search</label>
        <input type="text"
          defaultValue={this.props.inputValue}
          ref={(input) => this.props.handleInput(input) }
        />
        <input type="submit" onClick={this.props.handleSubmit} value="Search Uncontrolled"/>
      </form>
    );
  }
}

export default NominatimFormUncontrolled;

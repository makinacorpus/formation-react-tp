import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class NominatimFormUncontrolled extends React.Component {
  render() {
    return (
      <form className="NominatimFormUncontrolled">
        <TextField
          type="text"
          id="search"
          defaultValue={this.props.inputValue}
          ref={(input) => this.props.handleInput && this.props.handleInput(input) }
        />
        <RaisedButton
          label="Search"
          type="submit"
          onClick={(e) => { e.preventDefault(); this.props.handleSubmit() }}
          primary={true}
        />
      </form>
    );
  }
}

export default NominatimFormUncontrolled;

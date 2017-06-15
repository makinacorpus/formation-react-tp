import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

function NominatimForm(props) {
  return (
    <form className="NominatimForm">
      <TextField
        type="text"
        id="search-controlled"
        onChange={props.handleChange}
        value={props.inputValue}
      />
      <RaisedButton
        label="Search"
        type="submit"
        onClick={props.handleSubmit}
        primary={true}
      />
    </form>
  );
}

export default NominatimForm;

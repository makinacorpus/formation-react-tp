import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

function NominatimForm(props) {
  return (
    <form className="NominatimForm">
      <TextField
        type="text"
        id="search-controlled"
        onChange={(e) => props.handleChange(e.target.value)}
        value={props.inputValue}
      />
      <RaisedButton
        label="Search"
        type="submit"
        onClick={(e) => { e.preventDefault(); props.handleSubmit(); }}
        primary={true}
      />
    </form>
  );
}

export default NominatimForm;

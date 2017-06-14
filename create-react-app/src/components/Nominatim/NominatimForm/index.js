import React from 'react';

function NominatimForm(props) {
  return (
    <form className="NominatimForm">
      <label htmlFor="search">Search</label>
      <input type="text" id="search" onChange={props.handleChange} value={props.inputValue}/>
      <input type="submit" onClick={props.handleSubmit} value="Search"/>
    </form>
  );
}

export default NominatimForm;

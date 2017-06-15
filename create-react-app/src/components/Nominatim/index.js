import React from 'react';

import NominatimForm from './NominatimForm';
import NominatimFormUncontrolled from './NominatimFormUncontrolled';
import NominatimResults from './NominatimResults';

function Nominatim({
  handleSubmitControlled,
  handleSubmitUncontrolled,
  handleChange,
  handleInput,
  inputValue,
  data
}) {
  return (
    <div className="Nominatim">
      <NominatimForm
        handleSubmit={handleSubmitControlled}
        handleChange={handleChange}
        inputValue={inputValue}
      />
      <NominatimFormUncontrolled
        handleSubmit={handleSubmitUncontrolled}
        inputValue={inputValue}
        handleInput={handleInput}
      />
      <NominatimResults data={data} />
    </div>
  );
}

export default Nominatim;

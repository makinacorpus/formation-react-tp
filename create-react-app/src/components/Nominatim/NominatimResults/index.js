import React from 'react';

function NominatimResults (props) {
  return (
    <ul className="NominatimResults">
      {
        props.data.map((currentResult, index) => (
          <li key={index}>
            {currentResult.display_name} ({currentResult.lat}, {currentResult.lon})
          </li>
        ))
      }
    </ul>
  );
}

export default NominatimResults;

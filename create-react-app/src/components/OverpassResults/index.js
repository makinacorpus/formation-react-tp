import React from 'react';
import './style.css';

function OverpassResults({geojson}) {
  return (
    <div className="OverpassResults">
      <div className="results">
        { JSON.stringify(geojson) }
      </div>
    </div>
  );
}

export default OverpassResults;

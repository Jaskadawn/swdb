import React from 'react';

import './ResourceSorter.css';

const ResourceSorter = ({ disabled }) => {
  return (
    <div className="ResourceSorter">
      <label>Sort:</label>
      <select disabled={disabled}>
        <option>Asdsd</option>
      </select>
    </div>
  );
};

export default ResourceSorter;

import React from 'react';

import './ResourceFilter.css';

const ResourceFilter = ({ disabled }) => {
  return (
    <div className="ResourceFilter">
      <label>Search:</label>
      <input type="text" disabled={disabled} />
    </div>
  );
};

export default ResourceFilter;

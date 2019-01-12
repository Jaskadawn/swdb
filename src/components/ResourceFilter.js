import React from 'react';

import './ResourceFilter.css';

const ResourceFilter = ({ disabled, inputHandler }) => {
  return (
    <div className="ResourceFilter">
      <label>Search:</label>
      <input onInput={inputHandler} type="text" disabled={disabled} />
    </div>
  );
};

export default ResourceFilter;

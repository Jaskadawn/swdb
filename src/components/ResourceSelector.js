import React from 'react';

import './ResourceSelector.css';

const ResourceSelector = ({ resources, onResourceSelected }) => {
  // Create resource selectors
  const resourceNames = Object.keys(resources);
  const resourceSelectors = resourceNames.map((resource, index) => (
    <option key={index} value={resource}>
      {resource}
    </option>
  ));

  return (
    <div className="ResourceSelector">
      <label>Category:</label>
      <select onChange={onResourceSelected}>{resourceSelectors}</select>
    </div>
  );
};

export default ResourceSelector;

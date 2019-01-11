import React from 'react';
import Resource from './Resource';

import './ResourceContainer.css';

const ResourceContainer = ({ resourceName, data, isLoading }) => {
  const resources = data.map((elem, i) => <Resource key={i} data={elem} />);

  if (isLoading) {
    return <h2>Loading data...</h2>;
  } else {
    return <div className="ResourceContainer">{resources}</div>;
  }
};

export default ResourceContainer;

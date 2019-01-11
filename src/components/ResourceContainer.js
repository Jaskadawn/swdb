import React from 'react';
import Resource from './Resource';

import './ResourceContainer.css';

const ResourceContainer = ({ resourceName, data }) => {
  const resources = data.map((elem, i) => <Resource key={i} data={elem} />);

  return <div className="ResourceContainer">{resources}</div>;
};

export default ResourceContainer;

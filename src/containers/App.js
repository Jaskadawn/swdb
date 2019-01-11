import React, { Component } from 'react';
import ResourceSelector from '../components/ResourceSelector';
import ResourceFilter from '../components/ResourceFilter';
import ResourceSorter from '../components/ResourceSorter';
import ResourceContainer from '../components/ResourceContainer';
import Scroll from '../components/Scroll';

import './App.css';

const baseUrl = 'https://swapi.co/api/';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: {},
      resourceName: '',
      resourceData: []
    };
  }

  onResourceSelected = async event => {
    const resourceName = event.target.value;
    this.setState({ resourceName });
    this.fetchResource(resourceName);
  };

  fetchResource = async resourceName => {
    const resourceData = await fetch(baseUrl + resourceName)
      .then(response => response.json())
      .then(response => response.results);
    this.setState({ resourceData });
  };

  componentDidMount() {
    fetch(baseUrl)
      .then(response => response.json())
      .then(data => this.setState({ resources: data }));
  }

  render() {
    const { resources, resourceName, resourceData } = this.state;
    const disabled = resourceData.length === 0 ? true : false;

    return (
      <div>
        <div className="ResourceControls">
          <h1>
            @ <span>API</span>
          </h1>
          <ResourceFilter disabled={disabled} />2
          <ResourceSelector
            resources={resources}
            onResourceSelected={this.onResourceSelected}
          />
          <ResourceSorter disabled={disabled} />
        </div>
        <Scroll>
          <ResourceContainer resourceName={resourceName} data={resourceData} />
        </Scroll>
      </div>
    );
  }
}

export default App;

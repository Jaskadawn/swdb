import React, { Component } from 'react';
import ResourceFilter from '../components/ResourceFilter';
import ResourceSorter from '../components/ResourceSorter';
import ResourceContainer from '../components/ResourceContainer';
import CategoryButtons from '../components/CategoryButtons';
import Scroll from '../components/Scroll';

import './App.css';

const baseUrl = 'https://swapi.co/api/';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: {},
      resourceName: '',
      resourceData: [],
      isLoading: false
    };
  }

  onResourceSelected = async event => {
    const resourceName = event.target.value;
    this.setState({ resourceName });
    this.fetchResource(resourceName);
  };

  fetchResource = resourceName => {
    return async () => {
      this.setState({ isLoading: true });
      const resourceData = await fetch(baseUrl + resourceName)
        .then(response => response.json())
        .then(response => response.results);
      this.setState({ resourceData, isLoading: false });
    };
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    await fetch(baseUrl)
      .then(response => response.json())
      .then(data => this.setState({ resources: data, isLoading: false }));
  }

  render() {
    const { resources, resourceName, resourceData, isLoading } = this.state;
    const disabled = resourceData.length === 0 ? true : false;

    return (
      <div>
        <div className="ResourceControls">
          <h1>
            @ <span>DB</span>
          </h1>
          <CategoryButtons
            categories={resources}
            clickHandler={this.fetchResource}
          />
          <ResourceFilter disabled={disabled} />

          <ResourceSorter disabled={disabled} />
        </div>
        <Scroll>
          <ResourceContainer
            isLoading={isLoading}
            resourceName={resourceName}
            data={resourceData}
          />
        </Scroll>
      </div>
    );
  }
}

export default App;

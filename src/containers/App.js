import React, { Component } from 'react';
import ResourceFilter from '../components/ResourceFilter';
import ResourceSorter from '../components/ResourceSorter';
import ResourceContainer from '../components/ResourceContainer';
import CategoryItemList from '../components/CategoryItemList';
import CategoryButtons from '../components/CategoryButtons';
import ItemDisplay from '../components/ItemDisplay';

import './App.css';

const baseUrl = 'https://swapi.co/api/';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: {},
      resourceCount: 0,
      resourceName: '',
      resourceData: [],
      isLoading: false,
      selectedItem: null,
      filter: ''
    };
  }

  onResourceSelected = async event => {
    const resourceName = event.target.value;
    this.setState({ resourceName });
    this.fetchResource(resourceName);
  };

  setSelectedItem = id => () => {
    const newItem = this.state.resourceData[id];
    this.setState({ selectedItem: newItem });
  };

  filterItems = event => {
    this.setState({ filter: event.target.value });
  };

  fetchResource = resourceName => {
    return async () => {
      this.setState({
        isLoading: true,
        resourceCount: 0,
        selectedItem: null,
        resourceData: []
      });
      let resourceData = await fetch(baseUrl + resourceName)
        .then(response => response.json())
        .then(response => response);
      const data = resourceData.results;
      while (resourceData.next) {
        resourceData = await fetch(resourceData.next)
          .then(response => response.json())
          .then(response => response);
        data.push(...resourceData.results);
      }
      this.setState({
        resourceData: data,
        isLoading: false
      });
    };
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    await fetch(baseUrl)
      .then(response => response.json())
      .then(data => this.setState({ resources: data, isLoading: false }));
  }

  render() {
    const {
      resources,
      resourceName,
      resourceData,
      isLoading,
      selectedItem,
      filter
    } = this.state;
    const filteredItems = resourceData.filter(item =>
      Object.values(item)[0]
        .toLowerCase()
        .includes(filter.toLowerCase())
    );
    const disabled = resourceData.length === 0 ? true : false;
    const emptyData = resourceData.length === 0;

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
          {/* Enable filtering and sorting if there is data, */}
          {emptyData ? (
            <p style={{ color: 'red' }}>Start by selecting a category</p>
          ) : (
            [
              <ResourceFilter
                disabled={disabled}
                inputHandler={this.filterItems}
              />,
              <ResourceSorter disabled={disabled} />
            ]
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <CategoryItemList
            items={filteredItems}
            onItemChange={this.setSelectedItem}
          />

          <ItemDisplay item={selectedItem} />
        </div>
        <footer>Developed by: Jaakko Ikäheimo</footer>
      </div>
    );
  }
}

export default App;

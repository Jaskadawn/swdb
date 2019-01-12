import React, { Component } from 'react';
import CategoryButton from './CategoryButton';

import './CategoryButtons.css';

class CategoryButtons extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedButton: null };
  }

  setSelectedButton = event => {
    this.setState({ selectedButton: event.target.textContent });
  };

  render() {
    const buttons = Object.keys(this.props.categories).map((category, i) => {
      return (
        <CategoryButton
          key={i}
          category={category}
          selected={this.state.selectedButton === category}
          clickHandler={this.props.clickHandler(category)}
          mouseUpHandler={this.setSelectedButton}
        />
      );
    });

    return <div className="CategoryButtons">{buttons}</div>;
  }
}

export default CategoryButtons;

import React from 'react';
import CategoryButton from './CategoryButton';

import './CategoryButtons.css';

const CategoryButtons = ({ categories, clickHandler }) => {
  const buttons = Object.keys(categories).map((category, i) => {
    return (
      <CategoryButton
        key={i}
        category={category}
        clickHandler={clickHandler(category)}
      />
    );
  });

  return <div className="CategoryButtons">{buttons}</div>;
};

export default CategoryButtons;

import React from 'react';
import './CategoryButton.css';

const CategoryButton = ({ category, clickHandler }) => {
  return (
    <button className="CategoryButton" onClick={clickHandler}>
      {category}
    </button>
  );
};

export default CategoryButton;

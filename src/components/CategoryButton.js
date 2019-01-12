import React from 'react';
import './CategoryButton.css';

const CategoryButton = ({
  category,
  clickHandler,
  mouseUpHandler,
  selected
}) => {
  const classes = selected ? 'CategoryButton selected' : 'CategoryButton';
  return (
    <button
      className={classes}
      onMouseUp={mouseUpHandler}
      onClick={clickHandler}
    >
      {category}
    </button>
  );
};

export default CategoryButton;

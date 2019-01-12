import React from 'react';

import './CategoryItemList.css';

const CategoryItemList = ({ items, onItemChange }) => {
  return (
    <ul className="CategoryItemList">
      {items.map((item, i) => (
        <li key={i}>
          <button onClick={onItemChange(i)}>{Object.values(item)[0]}</button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryItemList;

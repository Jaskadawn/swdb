import React from 'react';

import './ItemDisplay.css';

const ItemDisplay = ({ item }) => {
  if (item === null) {
    return <div />;
  }
  let asd = [];
  let caption;
  const keys = Object.keys(item);
  keys.forEach((key, i) => {
    const val = item[key];
    if (i === 0) {
      caption = val;
    } else {
      console.log(val);
      asd.push(
        <tr key={i}>
          <td>{key.replace('_', ' ') + ':'}</td>
          <td>{val}</td>
        </tr>
      );
    }
  });

  return (
    <div className="ItemDisplay">
      <table>
        <caption>{caption}</caption>
        <tbody>{asd}</tbody>
      </table>
    </div>
  );
};

const isUrl = s => {
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  return regexp.test(s);
};

export default ItemDisplay;

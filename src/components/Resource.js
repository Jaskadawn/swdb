import React from 'react';

import './Resource.css';

const Resource = ({ data }) => {
  let asd = [];
  let caption;
  const keys = Object.keys(data);
  keys.forEach((key, i) => {
    const val = data[key];
    if (i === 0) {
      caption = val;
    } else if (!isUrl(val)) {
      asd.push(
        <tr key={i}>
          <td>{key.replace('_', ' ') + ':'}</td>
          <td>{val}</td>
        </tr>
      );
    }
  });

  return (
    <div className="Resource">
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

export default Resource;

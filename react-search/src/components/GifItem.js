import React from 'react';

//stateless functional component

const GifItem = (image) => {
  return (
    <li>
      <img src={ image.gif.url } alt="" />
    </li>
  )
};

export default GifItem;
import React from 'react';

//stateless functional component

const GifItem = (image) => {
  return (
    <li>
        <img src={image.gif.images.downsized.url} alt="" />
        
    </li>
  )
};

// <img src={ image.gif.url } alt="" />

export default GifItem;
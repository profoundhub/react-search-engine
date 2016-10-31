import React from 'react';

//stateless functional component

const GifItem = (image) => {
  return (
    <div className="gif-item">
        <img src={image.gif.images.downsized.url} alt="" />        
    </div>
  )
};

// <img src={ image.gif.url } alt="" />

export default GifItem;
import React from 'react';
import GifItem from './GifItem';

// Stateless Functional Component (SFC)
const GifList = (props) => { 
// instead of ... var GifList = function(props) {}

  const gifItems = props.gifs.map((image) => { 
    return <GifItem key={ image.id } gif={ image } />
  });

  return (
    <div className="gif-list">{gifItems}</div>
  );
};

export default GifList;
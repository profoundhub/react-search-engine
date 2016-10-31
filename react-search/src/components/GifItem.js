import React from 'react';

// Stateless Functional Component

// const GifItem = (image) => {

    const GifItem = ({ gif, onGifSelect }) => {
        return (
            <div className="gif-item" onClick={ () => onGifSelect(gif) }>
                <img src={ gif.images.downsized.url } alt="" />        
            </div>
        )
    };

// <img src={ image.gif.url } alt="" />

export default GifItem;
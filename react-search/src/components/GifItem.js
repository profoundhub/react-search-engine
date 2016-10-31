import React from 'react';

// Stateless Functional Component

// const GifItem = (image) => {

    const GifItem = ({ gif, onGifSelect }) => {
        return (
            <div className="gif-item">
                <img src={ image.gif.images.downsized.url } alt="" />        
            </div>
        )
    };

// <img src={ image.gif.url } alt="" />

export default GifItem;
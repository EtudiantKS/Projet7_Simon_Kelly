import React from 'react';

// Cards récupère 2 proprités => image & title
function Cards({ image, title }) {
    return (
        <div className="cards">
            <img src={image} alt="" className="cards__img" />
            <div className="cards__cover"></div>
            <h2 className="cards__title">{title}</h2>
        </div>
    )
};

export default Cards;
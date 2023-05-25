import React from 'react';

// Cards récupère 2 props => image & title
function Cards({ image, title }) {
    return (
        <div className="cards">
            <img src={image} alt="" className="cards__img" />
            <h2 className="cards__title">{title}</h2>
        </div>
    )
};

export default Cards;
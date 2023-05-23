import React, { useState } from 'react'
import chevron_Up from "../assets/Chevron_Up.png"
import chevron_Down from "../assets/Chevron_Down.png"


function Collapse({ title, content }) {
    const [open, setOPen] = useState(false); //Par défaut on définit le collapse comme fermé

    const toggle = () => {
        setOPen(!open); // inverse la version actuelle
    };

    const collapseChevron = (open ? chevron_Up : chevron_Down) // Chevron a utiliser si ouvert vs fermé

    return (
        <div className='collapse'>
            <button type="button" className='collapse__button' onClick={toggle}>
                <span className='collapse__title'>{title}</span>
                <div className="collapse__chevron">
                    <img src={collapseChevron} alt="" className='collapse__img' />
                </div>
            </button>
            {open && (
                <div className="collapse__info">
                    <ul className="collapse__list">
                        {Array.isArray(content) ? ( // si les informations sont sous forme de tableau
                            content.map((equipment) => (
                                <li className="collapse__list-element"> {equipment} </li> // alors on affiche sous forme de li 
                            ))
                        ) : (
                            <p className="collapse__text">{content}</p> // sinon on affiche les informations dans un paragraphe
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Collapse

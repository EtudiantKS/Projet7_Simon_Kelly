import React, { useState } from 'react';

//import des icones 
import chevron_Gauche from "../assets/Chevron_Gauche.png";
import chevron_Droit from "../assets/Chevron_Droit.png";

function Carousel({ pictures }) {

    const [index, setIndex] = useState(0)  // Permet de définir l'index de la première slide. Le compteur par défaut est à 0
    const totalPictures = pictures.length;

    // SI on est à la dernière slide : index === totalPictures - 1
    // => on passe à la première : setIndex(0)
    // SINON => on passe à la prochaine : setIndex(index + 1)

    const nextSlide = () => {
        if (index === totalPictures - 1) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    };

    // SI on est à la 1ère slide : index === 0
    // => on retourne à la dernière : setIndex(totalPictures - 1)
    // SINON => on va à la précèdente : setIndex(index - 1);

    const prevSlide = () => {
        if (index === 0) {
            setIndex(totalPictures - 1)
        }
        else {
            setIndex(index - 1);
        }
    };


    return (
        <div className="carousel">
            <img src={pictures[index]} alt="Logement proposé" className="carousel__picture" />

            {/* Si le logement a plusvd'une image, Alors on affiche les flèches et le compteur */}
            {totalPictures > 1 ? (
                <div className='carousel__chevron'>
                    <button onClick={prevSlide} className='carousel__chevron--button'>
                        <img src={chevron_Gauche} alt="flèche gauche" className="carousel__left" />
                    </button>
                    <button onClick={nextSlide} className='carousel__chevron--button'>
                        <img src={chevron_Droit} alt="flèche droit" className="carousel__rigth" />
                    </button>
                    <span className="carousel__counter">
                        {index + 1} / {totalPictures}
                    </span>
                </div>
            ) : false}
        </div>
    );
};

export default Carousel;

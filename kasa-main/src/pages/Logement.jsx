import { useParams } from "react-router-dom";
import products from '../datas/logements.json';

// on importe les composants
import Collapse from '../components/Collapse';
import Carousel from '../components/Carousel';

// on importe la page erreur
import ErrorPage from '../pages/ErrorPage';

// on importe les layouts
import Header from "../layout/Header";
import Footer from "../layout/Footer";


//Constant pour le tableau des étoiles (rating)
const stars = [1, 2, 3, 4, 5]

//fonction pour afficher la page logement et ses informations 
function Logement() {

    // on récupère l'id dans l'URL
    const { id } = useParams();
    // on rechercher et on récupère le logement correspondant à l'id de l'URL
    const product = products.find((product) => product.id === id);

    if (!product) {
        return <ErrorPage />;
    }
    //constante qui indique les informations associées au produit
    const { title, location, equipments, description, pictures, host, rating } = product;

    return (
        <section className="product">
            <Header />
            <Carousel pictures={pictures} />
            {/* Affichage du titre, de l'emplacement et des tags */}
            <div className="product__content">
                <div className="product__informations">
                    <h1 className="product__title">{title}</h1>
                    <p className="product__location">{location}</p>
                    <div className="product__tags">
                        {product.tags.map((element, index) => {
                            return (<p className='tags' key={"tags" + index}> {element}</p>)
                        })}
                    </div>
                </div>

                {/* div pour les infos du propriété et des étoiles  */}
                <div className='product__host-rating'>
                    {/* Affichage du nom du propriétaire et sa photo */}
                    <div className='product__host'>
                        <p>{host.name}</p>
                        <img src={host.picture} alt={title} />
                    </div>
                    {/* Affichage et couleurs des étoiles */}
                    <div className='product__rating'>
                        {
                            stars.map(element => {
                                const nbreEtoiles = parseInt(rating)
                                return (<span key={"rating"} className={element <= nbreEtoiles ? 'span1' : 'span2'}>★</span>)
                            })
                        }
                    </div>
                </div>
            </div>
            {/* affichage de la description et des équipements */}
            <div className=" product__collapse">
                <Collapse title="Description" content={description} />
                <Collapse title="Équipements" content={equipments} />
            </div>
            <Footer />
        </section>
    );
};

export default Logement;
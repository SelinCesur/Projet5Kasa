import VectorGauche from '../../Assets/VectorG.png'
import VectorDroite from '../../Assets/VectorD.png'
import '../../Styles/Carrousel.scss'
import React, { useState } from 'react'

function CarrouselPrécédent(index, tailleMax) {
  // si l'index est égal à 0, on retourne la tailleMax - 1
  if (index === 0) {
    return tailleMax - 1
  } else {
    // sinon on retourne l'index - 1
    return index - 1
  }
}

function CarrouselSuivant(index, tailleMax) {
  // si l'index est égal à la tailleMax - 1, on retourne 0
  if (index === tailleMax - 1) {
    return 0
    // sinon on retourne l'index + 1
  } else {
    return index + 1
  }
}

function Carrousel({ title, pictures }) {
  const [indexCarrousel, setIndex] = useState(0)
  const tailleMax = pictures.length
  return (
    <div className="carrousel">
      {pictures.map(
        (
          image,
          index, // map() permet de parcourir un tableau et de retourner un élément pour chaque élément du tableau
        ) => (
          <img
            src={image}
            className={index === indexCarrousel ? 'active' : 'inactive'} // affiche l'image active ou inactive en fonction de l'index
            alt={title}
          ></img>
        ),
      )}
      <img
        src={VectorGauche}
        className="fleche-gauche"
        onClick={() => setIndex(CarrouselPrécédent(indexCarrousel, tailleMax))} // au clic, on utilise setIndex pour changer l'index du carrousel avec la fonction CarrouselPrécédent
        alt="flèche gauche"
      ></img>
      <img
        src={VectorDroite}
        className="fleche-droite"
        onClick={() => setIndex(CarrouselSuivant(indexCarrousel, tailleMax))} // au clic, on utilise setIndex pour changer l'index du carrousel avec la fonction CarrouselSuivant
        alt="flèche droite"
      ></img>
    </div>
  )
}

export default Carrousel

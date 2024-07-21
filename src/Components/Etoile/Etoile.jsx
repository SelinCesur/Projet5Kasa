import EtoileGris from '../../Assets/EtoileGris.png'
import EtoileRouge from '../../Assets/EtoileRouge.png'

// renvoie la notation en fonction du rating
function notation(rating) {
  const maxRating = 5 // maximum de 5 étoiles
  let etoiles = []

  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      // si i est inférieur ou égal à rating, on affiche une étoile rouge, sinon une étoile grise
      etoiles.push(<img src={EtoileRouge} alt="etoile" />)
    } else {
      // sinon on affiche une étoile grise
      etoiles.push(<img src={EtoileGris} alt="etoile" />)
    }
  }

  return etoiles
}

function Etoile({ rating }) {
  return <div>{notation(rating)}</div>
}
export default Etoile

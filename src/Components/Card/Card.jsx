import { Link } from 'react-router-dom'
import './Card.scss'
function Card({ logement }) {
  return (
    <Link to={`/fiche-logement/${logement.id}`}>
      <div className="card">
        <img src={logement.cover} alt={logement.title} className="card-image" />
        <div className="card-content">
          <h1>{logement.title}</h1>
        </div>
      </div>
    </Link>
  )
}
export default Card

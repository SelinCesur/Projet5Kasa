import { Link } from 'react-router-dom'
import './Card.scss'
function Card({ logement }) {
  return (
    <Link to={`/fiche-logement/${logement.id}`}>
      <div
        className="card"
        style={{
          backgroundImage: `url(${logement.cover})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1>{logement.title}</h1>
      </div>
    </Link>
  )
}
export default Card

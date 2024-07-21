import Layout from '../../Components/Layout/Layout'
import Carrousel from '../../Components/Carrousel/Carrousel'
import './FicheLogement.scss'
import LogementsJson from '../../Data/logements.json'
import Tag from '../../Components/Tag/Tag'
import Collapse from '../../Components/Collapse/Collapse'
import Etoile from '../../Components/Etoile/Etoile'
import { Navigate } from 'react-router-dom'

function RetournerLogement(id) {
  return LogementsJson.find((logement) => logement.id === id)
}

function FicheLogement() {
  // déterminer l'id du logement à afficher à partir de l'url de la page - split() permet de découper une chaîne de caractères en fonction d'un séparateur donné
  const idFicheLogement = window.location.pathname.split('/')[2]

  // récupérer les informations du logement à afficher à partir de son id - id, title, cover, pictures, description, host, rating, location, equipments, tags
  const logement = RetournerLogement(idFicheLogement)

  // si le logement n'existe pas, rediriger vers la page 404

  const isValidId = logement !== undefined
  if (!isValidId) {
    return <Navigate to="/404" />
  }

  return (
    <Layout>
      <Carrousel
        title={logement.title}
        pictures={logement.pictures}
      ></Carrousel>

      <div className="flex">
        {/* titre et location */}
        <div className="titre-et-location">
          <p className="titre">{logement.title}</p>
          <p className="location">{logement.location}</p>
        </div>

        {/* host */}
        <div className="host">
          <span className="nom">{logement.host.name}</span>
          <img
            className="photo"
            src={logement.host.picture}
            alt={logement.host.name}
          />
        </div>

        {/* tags */}
        <div className="tags">
          {logement.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>

        {/* etoiles */}
        <div className="etoiles">{<Etoile rating={logement.rating} />}</div>
      </div>

      <div className="flex">
        <div className="contenu">
          <div className="description">
            <Collapse titre="Description" type="description">
              {logement.description}
            </Collapse>
          </div>
        </div>

        <div className="contenu">
          <div className="equipments">
            <Collapse titre="Équipements" type="equipements">
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FicheLogement

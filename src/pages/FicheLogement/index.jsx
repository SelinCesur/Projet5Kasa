import Layout from '../../Components/Layout'
import Carrousel from '../../Components/Carrousel'
import '../../Styles/FicheLogement.scss'
import LogementsJson from '../../Data/logements.json'
import Tag from '../../Components/Tag'
import Collapse from '../../Components/Collapse'

function RetournerLogement(id) {
  return LogementsJson.find((logement) => logement.id === id)
}

function FicheLogement() {
  // déterminer l'id du logement à afficher à partir de l'url de la page - split() permet de découper une chaîne de caractères en fonction d'un séparateur donné
  const idFicheLogement = window.location.pathname.split('/')[2]

  // récupérer les informations du logement à afficher à partir de son id - id, title, cover, pictures, description, host, rating, location, equipments, tags
  const logement = RetournerLogement(idFicheLogement)
  console.log(logement)
  return (
    <Layout>
      <Carrousel
        title={logement.title}
        pictures={logement.pictures}
      ></Carrousel>

      <p className="titre">{logement.title}</p>
      <p className="location">{logement.location}</p>
      <div className="tags">
        {logement.tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </div>

      <div className="description-et-equipement">
        <div className="description">
          <Collapse titre="Description" type="description">
            {logement.description}
          </Collapse>
        </div>

        <div className="equipments">
          <Collapse titre="Équipements" type="equipements">
            <ul>
              {logement.equipments.map((equipment) => (
                <li>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </Layout>
  )
}

export default FicheLogement

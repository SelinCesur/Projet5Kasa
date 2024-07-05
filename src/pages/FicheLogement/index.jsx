import Layout from '../../Components/Layout'
import Carrousel from '../../Components/Carrousel'
import '../../Styles/FicheLogement.scss'
import LogementsJson from '../../Data/logements.json'

function RetournerLogement(id) {
  return LogementsJson.find((logement) => logement.id === id)
}

function FicheLogement() {
  // déterminer l'id du logement à afficher à partir de l'url de la page - split() permet de découper une chaîne de caractères en fonction d'un séparateur donné
  const idFicheLogement = window.location.pathname.split('/')[2]

  // récupérer les informations du logement à afficher à partir de son id - id, title, cover, pictures, description, host, rating, location, equipments, tags
  const logement = RetournerLogement(idFicheLogement)
  return (
    <Layout>
      <Carrousel
        title={logement.title}
        pictures={logement.pictures}
      ></Carrousel>
      <p>{logement.title}</p>
    </Layout>
  )
}

export default FicheLogement

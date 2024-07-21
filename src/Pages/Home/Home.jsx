import './Home.scss'
import Layout from '../../Components/Layout/Layout'
import Banner from '../../Components/Banner/Banner'
import Card from '../../Components/Card/Card'
import Image1 from '../../Assets/imageSource1.png'
import LogementsJson from '../../Data/logements.json'

function Home() {
  const listeDesLogements = LogementsJson
  return (
    <Layout>
      <div className="App">
        <Banner titre="Chez vous, partout et ailleurs" image={Image1}></Banner>
        <div className="liste">
          {listeDesLogements.map((logement) => (
            <Card logement={logement} key={logement.id}></Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home

import '../../Home.scss'
import Layout from '../../Components/Layout'
import Banner from '../../Components/Banner'
import Card from '../../Components/Card'
import Image1 from '../../Assets/imageSource1.png'
import LogementsJson from '../../Data/logements.json'

function Home() {
  const listeDesLogements = LogementsJson
  return (
    <Layout>
      <div className="App">
        <Banner titre="Chez vous, partout et ailleurs" image={Image1}></Banner>
        <div class="liste">
          {listeDesLogements.map((logement) => (
            <Card logement={logement}></Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home

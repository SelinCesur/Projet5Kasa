import '../../Home.scss'
import Layout from '../../Components/Layout'
import Banner from '../../Components/Banner'
import Card from '../../Components/Card'
import Image1 from '../../Assets/imageSource1.png'

function Home() {
  const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6']
  return (
    <Layout>
      <div className="App">
        <Banner titre="Chez vous, partout et ailleurs" image={Image1}></Banner>
        <div class="liste">
          {cards.map((numero) => (
            <Card titre={numero}></Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home

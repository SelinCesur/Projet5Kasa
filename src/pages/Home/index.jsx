import '../../Home.scss'
import Layout from '../../Components/Layout'
import Banner from '../../Components/Banner'
import Card from '../../Components/Card'

function Home() {
  return (
    <Layout>
      <div className="App">
        <Banner></Banner>
        <div class="liste">
          <Card title="Titre de la location"></Card>
          <Card title="Titre de la location"></Card>
          <Card title="Titre de la location"></Card>
          <Card title="Titre de la location"></Card>
          <Card title="Titre de la location"></Card>
          <Card title="Titre de la location"></Card>
        </div>
      </div>
    </Layout>
  )
}

export default Home

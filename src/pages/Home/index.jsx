import '../../Home.scss'
import Layout from '../../Components/Layout'
import Banner from '../../Components/Banner'
import Card from '../../Components/Card/Card'

function Home() {
  return (
    <Layout>
      <div className="App">
        <Banner></Banner>
        <Card title="Card 1" description="Description 1"></Card>
        <Card title="Card 1" description="Description 1"></Card>
        <Card title="Card 1" description="Description 1"></Card>
        <Card title="Card 1" description="Description 1"></Card>
        <Card title="Card 1" description="Description 1"></Card>
        <Card title="Card 1" description="Description 1"></Card>
      </div>
    </Layout>
  )
}

export default Home

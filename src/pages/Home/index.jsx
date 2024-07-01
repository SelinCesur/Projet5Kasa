import logo from '../../logo.svg'
import '../../Home.scss'
import Layout from '../../Components/Layout'

function Home() {
  return (
    <Layout>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Salut
          </a>
        </header>
      </div>
    </Layout>
  )
}

export default Home

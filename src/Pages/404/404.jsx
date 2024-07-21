import Layout from '../../Components/Layout/Layout'

import { Link } from 'react-router-dom'
import './404.scss'
function Error() {
  return (
    <Layout>
      <div className="error">
        <h2 className="noexiste">404</h2>
        <strong className="message">
          Oups! La page que vous demandez n'existe pas.
        </strong>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </Layout>
  )
}

export default Error

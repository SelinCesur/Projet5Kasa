import Layout from '../../Components/Layout'

import { Link } from 'react-router-dom'
import '../../Styles/404.scss'
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

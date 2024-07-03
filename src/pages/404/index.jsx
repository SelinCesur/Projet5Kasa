import Layout from '../../Components/Layout'

import { Link } from 'react-router-dom'
import '../../Styles/404.scss'
function Error() {
  return (
    <Layout>
      <div class="error">
        <h2 class="noexiste">404</h2>
        <strong class="message">
          Oups! La page que vous demandez n'existe pas.
        </strong>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </Layout>
  )
}

export default Error

import '../../Styles/Header.scss'
import logo from '../../Assets/Kasa.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Kasa" />
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/a-propos">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

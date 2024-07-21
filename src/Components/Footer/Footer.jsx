import './Footer.scss'
import logo from '../../Assets/LogoKasaNoir.png'

function Footer() {
  return (
    <footer>
      <img
        src={logo}
        alt="Logo Kasa Noir et Blanc"
        width={122}
        height={39.44}
      />
      <div className="text">
        <p>© 2020 Kasa. All</p>
        <p>rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer

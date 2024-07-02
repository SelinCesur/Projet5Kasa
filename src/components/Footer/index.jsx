import '../../Styles/Footer.scss'
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
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer

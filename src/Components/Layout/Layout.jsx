import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import './Layout.scss'

function Layout({ children }) {
  return (
    <div className="layout">
      <div className="layout-margin">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout

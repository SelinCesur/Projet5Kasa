import Footer from '../Footer'
import Header from '../Header'

import '../../Styles/Layout.scss'

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

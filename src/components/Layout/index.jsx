import Footer from '../Footer'
import Header from '../Header'

import '../../Styles/Layout.scss'

function Layout({ children }) {
  return (
    <div class="layout">
      <div class="layout-margin">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout

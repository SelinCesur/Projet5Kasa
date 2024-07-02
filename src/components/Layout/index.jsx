import Footer from '../Footer'
import Header from '../Header'

import '../../Styles/Layout.scss'

function Layout({ children }) {
  return (
    <div class="layout">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

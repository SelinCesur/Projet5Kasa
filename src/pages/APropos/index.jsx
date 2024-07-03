import Layout from '../../Components/Layout'
import Banner from '../../Components/Banner'
import Image2 from '../../Assets/imageSource2.png'

import '../../Styles/APropos.scss'
function APropos() {
  return (
    <Layout>
      <div>
        <Banner image={Image2}></Banner>
      </div>
    </Layout>
  )
}

export default APropos

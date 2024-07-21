import './Banner.scss'

function Banner({ titre, image }) {
  return (
    <div className="banner">
      <img src={image} alt="banner" className="banner-image" />
      <div className="banner-content">
        <h1>{titre}</h1>
      </div>
    </div>
  )
}
export default Banner

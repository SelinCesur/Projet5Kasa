import '../../Styles/Banner.scss'

function Banner({ titre, image }) {
  return (
    <div
      class="banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${image})`, // https://stackoverflow.com/questions/4997493/set-opacity-of-background-image-without-affecting-child-elements
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'black',
        height: '223px',
      }}
    >
      <h1>{titre}</h1>
    </div>
  )
}
export default Banner

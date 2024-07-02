import '../../Styles/Banner.scss'
import Image1 from '../../Assets/imageSource1.png'

function Banner() {
  return (
    <div
      class="banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${Image1})`, // https://stackoverflow.com/questions/4997493/set-opacity-of-background-image-without-affecting-child-elements
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'black',
      }}
    >
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}
export default Banner

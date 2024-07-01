import '../../Styles/Card.scss'
function Card({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
export default Card

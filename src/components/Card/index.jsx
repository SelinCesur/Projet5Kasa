function Card({ label, title, picture }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
      <span>{label}</span>
      <img src={picture} alt="Home" height={80} width={80} />
      <span>{title}</span>
    </div>
  )
}

export default Card

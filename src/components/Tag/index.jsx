import '../../Styles/Tag.scss'

function Tag({ children }) {
  return (
    <div className="tag">
      <strong>{children}</strong>
    </div>
  )
}

export default Tag

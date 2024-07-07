import '../../Styles/Collapse.scss'
import VectorFermer from '../../Assets/VectorF.png'
import VectorOuvrir from '../../Assets/VectorO.png'

function Collapse({ titre, children, type }) {
  const activer = () => {
    const collapseContent = document.querySelector(
      `.collapse.${type} .collapse-content`,
    )
    const collapseHeader = document.querySelector(
      `.collapse.${type} .collapse-header img`,
    )
    if (collapseContent.style.display === 'none') {
      collapseContent.style.display = 'block'
      collapseHeader.src = VectorOuvrir
    } else {
      collapseContent.style.display = 'none'
      collapseHeader.src = VectorFermer
    }
  }

  return (
    <div className={'collapse ' + type}>
      <div className="collapse-header">
        <h2>{titre}</h2>
        <img onClick={activer} src={VectorOuvrir} alt="VectorOuvrir" />
      </div>
      <div className="collapse-content">{children}</div>
    </div>
  )
}

export default Collapse

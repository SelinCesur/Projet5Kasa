import './Collapse.scss'
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
    // si desactiver est present, on le remplace par activer
    if (collapseContent.classList.contains('desactiver')) {
      collapseContent.classList.replace('desactiver', 'activer')
      collapseHeader.src = VectorOuvrir
    } else {
      // sinon on remplace activer par desactiver
      collapseContent.classList.replace('activer', 'desactiver')
      collapseHeader.src = VectorFermer
    }
  }

  return (
    <div className={'collapse ' + type}>
      <div className="collapse-header">
        <h2>{titre}</h2>
        <img onClick={activer} src={VectorFermer} alt="VectorFermer" />
      </div>
      <div className="collapse-content desactiver">{children}</div>
    </div>
  )
}

export default Collapse

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home'
import APropos from '../../Pages/APropos'
import FicheLogement from '../../Pages/FicheLogement'
import Error from '../../Pages/404'

function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      f
    </Router>
  )
}

export default RoutesComponent

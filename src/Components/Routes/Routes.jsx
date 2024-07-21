import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import APropos from '../../Pages/APropos/APropos'
import FicheLogement from '../../Pages/FicheLogement/FicheLogement'
import Error from '../../Pages/404/404'

function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default RoutesComponent

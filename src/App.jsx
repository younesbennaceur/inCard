import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'  // <-- Pas d'accolades {Home}, car c'est un export default

import Navbar from './components/Navbar' 

 // <-- Pas d'accolades {Navbar}, car c'est un export default

function App() {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        
       
        {/* Ajout de la route pour la page "À propos de nous" */}
       
      </Routes>
    </div>
  )
}

export default App  // <-- On exporte seulement App ici
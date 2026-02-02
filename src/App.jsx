import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'  // <-- Pas d'accolades {Home}, car c'est un export default

import Navbar from './components/Navbar' 
import Footer from './components/Footer'


function App() {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        
       
     
       
      </Routes>
      <Footer />
    </div>
  )
}

export default App  
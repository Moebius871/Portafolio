import React from 'react'
import Principal from './Paginas/principal.jsx'
import Contacto from "./Paginas/contactos"
import Proyectos from "./Paginas/proyectos.jsx"
import Portafolio from './Paginas/portafolio.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Principal/>} />
        <Route path='/portafolio' element={<Portafolio/>} />
        <Route path='/proyectos' element={<Proyectos/>} />
        <Route path='/contacto' element={<Contacto/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

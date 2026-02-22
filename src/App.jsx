import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Principal from './Paginas/principal.jsx'
import Contacto from "./Paginas/contactos"
import Proyectos from "./Paginas/proyectos.jsx"
import Portafolio from './Paginas/portafolio.jsx'
import Registro from './Paginas/registro.jsx'
import Login from './Paginas/login.jsx'
import Baseproyectos from './Paginas/layout/baseproyectos.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 

function App() {

  return (
    <>
    <div>
      <ToastContainer position="top-left" autoClose={3000} />
    </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Principal/>} />
        <Route path='/portafolio' element={<Portafolio/>} />
        <Route path='/proyectos' element={<Proyectos/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/registro' element={<Registro/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/baseproyectos' element={<Baseproyectos/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

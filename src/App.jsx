import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Principal from './paginas/principal.jsx'
import Contacto from "./paginas/contactos"
import Proyectos from "./paginas/proyectos.jsx"
import Portafolio from './paginas/portafolio.jsx'
import Registro from './Paginas/registro.jsx'
import Login from './Paginas/login.jsx'
import Baseproyectos from './paginas/layouts/baseproyectos.jsx'
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
        <Route path="/baseproyectos" element={<PrivateRoute><Baseproyectos /></PrivateRoute>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import{ Link } from 'react-router-dom'
import './header.css'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Header() {
const { usuario, logout } = useContext(AuthContext);  
  return (
    <>
      <div className="cabecera">
      <div className="titulo_1">
        <h1>Jhair Espindola</h1>
      </div>
      <nav className="titulo_2">
          <ul>
            <li><Link to="/">Principal</Link></li>
            <li><Link to="/portafolio">Portafolio</Link></li>
            <li><Link to="/proyectos">Mis Proyectos</Link></li>
            <li><Link to="/contacto">Contactos</Link></li>
            <Link to="/registro">Iniciar Sesion / Registrarse</Link>
          </ul>
      </nav>
      <nav className='titulo_3'>
        {usuario ? (
        <>
        <span>Hola, {usuario}</span>
        <button onClick={logout}>Salir</button>
        </>
        ) : (
        <Link to="/login">Iniciar Sesión</Link>
        )}
        </nav>
      </div>
    </>
  )
}

export default Header

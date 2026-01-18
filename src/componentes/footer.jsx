import React from 'react'
import  './header.css'
import GitHub from '../assets/imagenes/Icono.png';
import OtraHija from '../assets/imagenes/dos.png';
function Footer() {
  
  return (
    <>
      <div className="pie">
      <section className="pata">
            <div className="redes-sociales">
                <a href="https://github.com/Moebius871" target="_blank" rel="noopener noreferrer">
                    <img src={GitHub} alt="GitHub" />
                </a>
            </div>

            <div className="foto">
                <img className="otra-hija" src={OtraHija} alt="Ilustración adicional" />
            </div>

            <div className="contactos">
                <ul>
                    <li>Información</li>
                </ul>
            </div>
        </section>

        <section className="reservado">
            <p>© 2025 Jhair Espindola — Todos los derechos reservados.</p>
        </section>
        </div>
    </>
  )
}

export default Footer
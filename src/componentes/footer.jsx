import React from 'react'
import  './header.css'
function Footer() {
  
  return (
    <>
      <div className="pie">
      <section className="pata">
            <div className="redes-sociales">
                <a href="https://github.com/Moebius871" target="_blank" rel="noopener noreferrer">
                    <img className="icono" src="public\imagenes\Icono.png" alt="GitHub" />
                </a>
            </div>

            <div className="foto">
                <img className="otra-hija" src="public\imagenes\dos.png" alt="Ilustración adicional" />
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
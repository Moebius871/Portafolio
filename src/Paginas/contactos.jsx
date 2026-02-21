import Header from '../componentes/header'
import Footer from '../componentes/footer'
import './contactos.css'
import malabares from '../assets/gifs/uno.gif'
import { useRef, useEffect } from "react"
import Swal from "sweetalert2"
import "sweetalert2/dist/sweetalert2.min.css"

function Contacto() {

  const nombreRef = useRef(null)

  useEffect(() => {
    if (nombreRef.current) {
      nombreRef.current.focus()
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    Swal.fire({
      title: "¡Mensaje enviado!",
      text: "Gracias por contactarme ( •̀ᴗ•́ )و ̑̑",
      width: 400,
      color: "cyan",
      background: "#fff url('src/assets/gifs/lion.gif') no-repeat center",
    })
  }

  return (
    <>
      <Header />

      <main>
        <section className="intro">
          <h2>Contáctame</h2>
          <p>
            Si quieres hablar <span>o hacer panas (ﾉ･_-)☆</span> conmigo,
            llena el siguiente formulario.
          </p>
        </section>

        <section className="intermedio">
          <div className="formulario">
            <form className="texto-formulario" onSubmit={handleSubmit}>
              
              <label htmlFor="nombre">Nombre</label>
              <input
                ref={nombreRef}
                id="nombre"
                type="text"
                placeholder="Pon tu nombre aquí"
                required
              />

              <label htmlFor="correo">Correo electrónico</label>
              <input
                id="correo"
                type="email"
                placeholder="Pon tu correo aquí"
                required
              />

              <label htmlFor="asunto">Mensaje</label>
              <textarea
                id="asunto"
                placeholder="Escribe tu mensaje aquí..."
                required
              ></textarea>

              <button type="submit">Enviar</button>
            </form>
          </div>

          <img src={malabares} alt="malabares" />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Contacto
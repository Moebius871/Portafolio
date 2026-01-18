import Header from '../componentes/header'
import Footer from '../componentes/footer'
import './contactos.css'
import malabares from '../assets/gifs/uno.gif';

function Contacto() {
    return (
        <>
            <Header/>

            <main>
                <section className="intro">
                    <h2>Contáctame</h2>
                    <p>Si quieres hablar <span>o hacer panas (ﾉ･_-)☆</span> conmigo, llena el siguiente formulario.</p>
                </section>

                <section className="intermedio">
                    <div className="formulario">
                        <form className="texto-formulario">
                            <label htmlFor="nombre">Nombre</label>
                            <input id="nombre" type="text" placeholder="Pon tu nombre aquí" />

                            <label htmlFor="correo">Correo electrónico</label>
                            <input id="correo" type="email" placeholder="Pon tu correo aquí" />

                            <label htmlFor="asunto">Mensaje</label>
                            <textarea id="asunto" placeholder="Escribe tu mensaje aquí..."></textarea>

                            <button type="submit">Enviar</button>
                        </form>
                    </div>

                    <img src={malabares} alt="malabares"/>
                </section>
            </main>

            <Footer/>
        </>
    )
}

export default Contacto

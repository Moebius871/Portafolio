import Header from '../componentes/header'
import Footer from '../componentes/footer'
import  './principal.css'
function Principal() {
    return (
        <>
        <Header/>
        <main>
        <div className="intro-foto">
        <section className="intro">
            <p>
                ¡Hola! <span>ヾ(´･ω･｀)</span> Soy Jhair, también conocido como MoEbius (o Shisho para los amigos 😄).  
                Soy estudiante del curso Fullstack y me gusta el anime, además de jugar o traducir videojuegos <span>(─‿‿─)</span>.
            </p>
            <button>¿Quieres saber más?</button>
        </section>

        <section className="foto-principal">
            <img src="public/imagenes/uno.png" alt="Foto Mija"/>
        </section>
        </div>
            <section className="paneles">
        <div className="gif">
            <img src="public/gifs/dos.gif" alt="gif"/>
        </div>
        <div className="gif">
            <img src="public/gifs/tres.gif" alt="gif"/>
        </div>
        <div className="gif">
            <img src="public/gifs/seis.gif" alt="gif"/>
        </div>
    </section>

    <section className="intermedio">
        <div className="formulario">
            <form className="texto-formulario">
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" type="text" placeholder="Pon tu nombre aqui porfa" />

                <label htmlFor="correo">Correo electrónico</label>
                <input id="correo" type="email" placeholder="Pon tu correo aqui xfis" />

                <label htmlFor="asunto">Asunto</label>
                <textarea id="asunto" placeholder="Escribe tu mensaje aquí..."></textarea>

                <button type="submit">Enviar</button>
            </form>
        </div>

        <div className="mapa">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1410.612187608298!2d-78.44040927711916!3d-0.0864959185023642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58f247dd9c169%3A0x129a8aa02fae5ef6!2sCarlos%20Mantilla%20%26%20Jos%C3%A9%20R.%20Andrade%20San%2C%20170204%20Quito!5e0!3m2!1ses-419!2sec!4v1762101286847!5m2!1ses-419!2sec"
                width="400" 
                height="300" 
                styles="border:0;" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        </section>
        </main>
    <Footer/>
    </>
    )
}
export default Principal

import Header from '../componentes/header'
import Footer from '../componentes/footer'
import './portafolio.css'
import michus from '../assets/gifs/cinco.gif';
import { useEffect } from "react";

function Portafolio() {
    useEffect(() => {
        document.title = "Portafolio - Mi Sitio Web";
    }, []);
    return (
        <>
            <Header/>

            <main>
                <section className="intro">
                    <h2>Mi Portafolio</h2>
                    <p>
                        Bienvenido a mi portafolio digital.  
                        Aquí encontrarás información sobre mí, mis habilidades y mi experiencia en desarrollo Fullstack.
                    </p>
                </section>

                <section className="paneles">
                    <div className="panel">
                        <h3>Sobre mí</h3>
                        <p>Estudiante Fullstack apasionado por el desarrollo web y los videojuegos.</p>
                    </div>

                    <div className="panel">
                        <h3>Habilidades</h3>
                        <p>HTML, CSS, JavaScript, React, Node.js.</p>
                    </div>

                    <div className="panel">
                        <h3>Objetivo</h3>
                        <p>Crear soluciones web funcionales y visualmente atractivas.</p>
                    </div>
                </section>
                <img src={michus} alt="michus"/>
            </main>

            <Footer/>
        </>
    )
}

export default Portafolio

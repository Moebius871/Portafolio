import Header from '../componentes/header'
import Footer from '../componentes/footer'
import './proyectos.css'
import callaogil from '../assets/gifs/cuatro.gif';
import Sidebar from '../componentes/sidebar';
function Proyectos() {
    return (
        <>
            <Header/>
            <sidebar/>
            <main>
                <section className="intro">
                    <h2>Mis Proyectos</h2>
                    <p>Aquí puedes ver algunos de los proyectos en los que he trabajado.</p>
                </section>
                <img src={callaogil} alt="callaogil"/>
                <section className="proyectos">
                    <div className="proyecto">
                    
                    </div>
                </section>
            </main>

            <Footer/>
        </>
    )
}

export default Proyectos

import Header from '../componentes/header'
import Footer from '../componentes/footer'
import './proyectos.css'
import uno from '../assets/1.png';

function Proyectos() {
    return (
        <>
            <Header/>

            <main>
                <section className="intro">
                    <h2>Mis Proyectos</h2>
                    <p>Aquí puedes ver algunos de los proyectos en los que he trabajado.</p>
                </section>
                <img src="public/gifs/cuatro.gif" alt="callaogil"/>
                <section className="paneles">
                    <div className="panel">
                        <h3>Proyecto 1</h3>
                        <img src={uno} alt="Proyecto 1"/>
                    </div>

                    <div className="panel">
                        <h3>Proyecto 2</h3>
                        <p>.</p>
                    </div>

                    <div className="panel">
                        <h3>Proyecto 3</h3>
                        <p>.</p>
                    </div>
                </section>
            </main>

            <Footer/>
        </>
    )
}

export default Proyectos

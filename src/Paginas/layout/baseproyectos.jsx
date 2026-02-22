import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './baseproyectos.css';
function Baseproyectos() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [proyectos, setProyectos] = useState([]);
    const onSubmit = (data) => {
    setProyectos([...proyectos, data]); 
    reset(); 
  }
    return (
        <div>
            <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Pon tu nombre aquí"
                required
                {...register("nombre", { required: true })}
              />
              <input
                id="link"
                type="url"
                placeholder="Pon tu enlace de GitHub aquí"
                required
                {...register("link", { required: true })}
              />
              <textarea
                id="descripcion"
                placeholder="Escribe tu mensaje aquí..."
                required
              ></textarea>
                <input
                id="calificacion"
                type="number"
                placeholder="Pon tu calificacion aquí..."
                required
                {...register("calificacion", { required: true, validate: (value) => value <= 10 || "La calificación debe ser menor o igual a 10" })}
              />
                <input
                id="imagen"
                type="file"
                placeholder="Pon tu imagen aquí..."
                required
                {...register("imagen", { required: true })}
              />
              <button type="submit">Enviar</button>
              {errors.nombre && <p className="error">El nombre es obligatorio</p>}
              {errors.link && <p className="error">El enlace de GitHub es obligatorio</p>}
              {errors.calificacion && <p className="error">La calificación es obligatoria y debe ser menor o igual a 10</p>}
              {errors.imagen && <p className="error">La imagen es obligatoria</p>}
            </form>
            <section className="proyectos-lista">
            <h1>Proyectos</h1>
            <table>
              <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Enlace de GitHub</th>
                    <th>Descripcion</th>
                    <th>Calificacion</th>
                    <th>Imagen</th>
                </tr>
              </thead>
              <tbody>
                {proyectos.map((proyecto, index) => (
                    <tr key={index}>
                        <td>{proyecto.nombre}</td>
                        <td><a href={proyecto.link} target="_blank" rel="noopener noreferrer">GitHub</a></td>
                        <td>{proyecto.descripcion}</td>
                        <td>{proyecto.calificacion}</td>
                        <td><img src={URL.createObjectURL(proyecto.imagen[0])} alt="Imagen del proyecto" width="200"/></td>
                    </tr>
                ))}
              </tbody>
            </table>
            </section>
        </div>
    )
}

export default Baseproyectos
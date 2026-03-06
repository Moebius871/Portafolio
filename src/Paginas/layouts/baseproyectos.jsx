import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {crearProyecto, obtenerProyectos, eliminarProyecto, actualizarProyecto} from "../../Services/proyectosService";
import "./baseproyectos.css";

function Baseproyectos() {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const [proyectos, setProyectos] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [idEditar, setIdEditar] = useState(null);

  useEffect(() => {
    cargarProyectos();
  }, []);

  const cargarProyectos = async () => {
    const data = await obtenerProyectos();
    setProyectos(data);
  };

  const onSubmit = async (data) => {
    try {
      if (modoEdicion) {
        await actualizarProyecto(idEditar, data);
        setModoEdicion(false);
        setIdEditar(null);
      } else {
        await crearProyecto(data);
      }

      reset();
      cargarProyectos();

    } catch (error) {
      console.error("Error:", error);
    }
  };

  const activarEdicion = (proyecto) => {
    setModoEdicion(true);
    setIdEditar(proyecto.id);

    setValue("nombre", proyecto.nombre);
    setValue("link", proyecto.link);
    setValue("descripcion", proyecto.descripcion);
    setValue("calificacion", proyecto.calificacion);
    setValue("imagen", proyecto.imagen);
  };

  const cancelarEdicion = () => {
    setModoEdicion(false);
    setIdEditar(null);
    reset();
  };

  const manejarEliminar = async (id) => {
    if (window.confirm("¿Seguro que deseas eliminar este proyecto?")) {
      await eliminarProyecto(id);
      cargarProyectos();
    }
  };

  return (
  <div className="contenedor">

    {/* FORMULARIO */}
    <section className="form-card">

      <h2>{modoEdicion ? "Editar Proyecto" : "Nuevo Proyecto"}</h2>

      <form className="formulario" onSubmit={handleSubmit(onSubmit)}>

        <input
          type="text"
          placeholder="Nombre del proyecto"
          {...register("nombre", { required: true })}
        />

        <input
          type="url"
          placeholder="Enlace de GitHub"
          {...register("link", { required: true })}
        />

        <textarea
          placeholder="Descripción"
          {...register("descripcion", { required: true })}
        />

        <input
          type="number"
          placeholder="Calificación (0-10)"
          {...register("calificacion", {
            required: true,
            validate: (value) =>
              value <= 10 || "La calificación debe ser menor o igual a 10"
          })}
        />

        <input
          type="text"
          placeholder="URL de la imagen"
          {...register("imagen", { required: true })}
        />

        <div className="botones-form">

          <button type="submit" className="btn-guardar">
            {modoEdicion ? "Actualizar" : "Guardar"}
          </button>

          {modoEdicion && (
            <button
              type="button"
              className="btn-cancelar"
              onClick={cancelarEdicion}
            >
              Cancelar
            </button>
          )}

        </div>

        {errors.nombre && <p className="error">Nombre obligatorio</p>}
        {errors.link && <p className="error">Enlace obligatorio</p>}
        {errors.descripcion && <p className="error">Descripción obligatoria</p>}
        {errors.calificacion && <p className="error">{errors.calificacion.message}</p>}
        {errors.imagen && <p className="error">Imagen obligatoria</p>}

      </form>
    </section>


    {/* TABLA */}
    <section className="proyectos-lista">

      <h1>Mis Proyectos</h1>

      <table>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>GitHub</th>
            <th>Descripción</th>
            <th>Calificación</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>

          {proyectos.map((proyecto) => (
            <tr key={proyecto.id}>

              <td>
                <img
                  className="img-proyecto"
                  src={proyecto.imagen}
                  alt="Proyecto"
                />
              </td>

              <td>{proyecto.nombre}</td>

              <td>
                <a
                  className="link-github"
                  href={proyecto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </td>

              <td className="descripcion">
                {proyecto.descripcion}
              </td>

              <td className="nota">
                {proyecto.calificacion}/10
              </td>

              <td className="acciones">

                <button
                  className="btn-editar"
                  onClick={() => activarEdicion(proyecto)}
                >
                  Editar
                </button>

                <button
                  className="btn-eliminar"
                  onClick={() => manejarEliminar(proyecto.id)}
                >
                  Eliminar
                </button>

              </td>

            </tr>
          ))}

        </tbody>
      </table>

    </section>

  </div>
);
}

export default Baseproyectos;
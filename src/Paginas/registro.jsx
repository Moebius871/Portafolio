import { useNavigate, Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import "sweetalert2/dist/sweetalert2.min.css"
import "./registro.css"
import { AuthContext } from "../context/AuthContext"
import { registrarUsuario } from "../Services/authService";

function Registro() {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {

  try {

    await registrarUsuario(data.email, data.password);

    Swal.fire({
      title: "Registro completado (・ω<)",
      text: "Cuenta creada correctamente",
      confirmButtonText: "Ir a Login",
      customClass: {
        popup: "alerta-neon",
        confirmButton: "alerta-boton"
      },
      buttonsStyling: false
    }).then(() => {
      navigate("/login")
    });

  } catch (error) {

    Swal.fire({
      title: "Error",
      text: error.message,
      confirmButtonText: "Intentar otra vez"
    });

  }

}

  return (
    <div className="registro-contenedor">
      <div className="registro-formulario">
        <h2>Crear Cuenta</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          <label>Nombre:</label>
          <input
            type="text"
            {...register("nombre", {
              required: "El nombre es obligatorio",
              minLength: {
                value: 3,
                message: "Mínimo 3 caracteres"
              }
            })}
          />
          {errors.nombre && <p className="error">{errors.nombre.message}</p>}

          <label>Email:</label>
          <input
            type="email"
            {...register("email", {
              required: "El email es obligatorio"
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <label>Contraseña:</label>
          <input
            type="password"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "Mínimo 6 caracteres"
              }
            })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}

          <button type="submit">Registrarse</button>

          <p>
            ¿Ya tienes cuenta? <Link to="/baseproyectos">Inicia sesión</Link>
          </p>

        </form>
      </div>
    </div>
  )
}

export default Registro
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import "sweetalert2/dist/sweetalert2.min.css"
import "./login.css"
import { iniciarSesion } from "../Services/authService";
function Login() {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {

  try {

    await iniciarSesion(data.email, data.password);

    Swal.fire({
      title: "Acceso concedido",
      text: "Bienvenido nuevamente ヘ(°￢°)ノ",
      confirmButtonText: "Entrar",
      customClass: {
        popup: "alerta-neon",
        confirmButton: "alerta-boton"
      },
      buttonsStyling: false
    }).then(() => {
      navigate("/baseproyectos")
    })

  } catch (error) {

    Swal.fire({
      title: "Error",
      text: "Email o contraseña incorrectos",
      confirmButtonText: "Intentar otra vez",
      customClass: {
        popup: "alerta-neon",
        confirmButton: "alerta-boton"
      },
      buttonsStyling: false
    })

  }

}

  return (
    <div className="login-contenedor">
      <div className="login-caja">
        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>

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
              required: "La contraseña es obligatoria"
            })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}

          <button type="submit">Aceptar</button>

        </form>
      </div>
    </div>
  )
}

export default Login
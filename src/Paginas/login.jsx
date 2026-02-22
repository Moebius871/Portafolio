import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import "sweetalert2/dist/sweetalert2.min.css"
import "./login.css"
function Login() {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {

    if (data.email === "admin@email.com" && data.password === "123456") {

      Swal.fire({
        title: "Acceso concedido",
        text: "Bienvenido nuevamente ヘ(°￢°)ノ",
        width: 600,
        padding: "3em",
        backdrop: `
          rgba(0,0,123,0.4)
          url("src/assets/gifs/mistico.gif")
          left top
          no-repeat
        `,
        customClass: {
          popup: "alerta-neon",
          confirmButton: "alerta-boton"
        },
        buttonsStyling: false,
        confirmButtonText: "Entrar"
      }).then(() => {
        navigate("/baseproyectos")
      })

    } else {

      Swal.fire({
        title: "Error de acceso",
        text: "Credenciales incorrectas",
        width: 600,
        padding: "3em",
        backdrop: `
          rgba(0,0,123,0.4)
          url("src/assets/gifs/kabum.gif")
          left top
          no-repeat
        `,
        customClass: {
          popup: "alerta-neon",
          confirmButton: "alerta-boton"
        },
        buttonsStyling: false,
        confirmButtonText: "Intentar de nuevo"
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
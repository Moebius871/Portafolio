import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "./registro.css";
function Registro() {
const navigate = useNavigate();
const [datos, setDatos] = useState({
    nombre: '',
    correo: '',
    contrasena: '',
}
)
const manejoCambios = (e) => {
    setDatos({
        ...datos,
        [e.target.name]: e.target.value
    })
}
const enviarDatos = (e) => {
    e.preventDefault();
    if(datos.nombre.length < 3){
        toast.error("Datos demasiado cortos");
        return;
    }
    toast.success(`¡Bienvenido, ${datos.nombre}! Pase`);
    console.log(datos);
    setTimeout(() => navigate ('/login'), 2000);
}
return(
  <div className="registro-contenedor">
    <div className="registro-formulario">
      <h2>Crear Cuenta</h2>

      <form onSubmit={enviarDatos}>
        <label>Nombre:</label>
        <input 
          type="text" 
          name="nombre" 
          value={datos.nombre} 
          onChange={manejoCambios} 
          required 
        />

        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={datos.email} 
          onChange={manejoCambios} 
          required 
        />

        <label>Contraseña:</label>
        <input 
          type="password" 
          name="password" 
          value={datos.password} 
          onChange={manejoCambios} 
          required 
        />

        <button type="submit">Registrarse</button>
      </form>
    </div>
  </div>
);
}
export default Registro;
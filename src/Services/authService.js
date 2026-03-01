import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

// Función para REGISTRAR usuario
export const registrarUsuario = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Error al registrar:", error);
        throw error;
    }
};

// Función para LOGIN
export const iniciarSesion = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        throw error;
    }
};

// Función para LOGOUT
export const cerrarSesion = async () => {
    await signOut(auth);
};
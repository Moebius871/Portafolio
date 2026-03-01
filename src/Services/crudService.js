import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage, auth } from "../firebase/firebase";

const COLECCION = "proyectos";


export const subirImagen = async (archivo) => {
    if (!archivo) return null;
    const storageRef = ref(storage, `proyectos/${archivo.name}_${Date.now()}`);
    await uploadBytes(storageRef, archivo);
    const url = await getDownloadURL(storageRef);
    return url;
};

// 2. Función para CREAR PROYECTO (CORREGIDA)
export const crearProyecto = async (datosProyecto, archivoImagen) => {
    try {
        let imagenUrl = "";

        // ESCENARIO A: Si el usuario seleccionó un archivo (Storage funcionando)
        if (archivoImagen) {
            imagenUrl = await subirImagen(archivoImagen);
        }
        // ESCENARIO B: Si no hay archivo, usamos el link de texto (Tu caso actual)
        else {
            imagenUrl = datosProyecto.imagen || "";
        }

        // Guardamos en Firestore
        const docRef = await addDoc(collection(db, COLECCION), {
            nombre: datosProyecto.nombre,
            enlace: datosProyecto.enlace,
            descripcion: datosProyecto.descripcion,
            calificacion: datosProyecto.calificacion,
            imagen: imagenUrl, // Ahora sí guardará el link que pegaste
            fechaCreacion: new Date()
        });

        return docRef.id;
    } catch (error) {
        console.error("Error al crear proyecto:", error);
        throw error;
    }
};

// 3. Función para OBTENER PROYECTOS
export const obtenerProyectos = async () => {
    const querySnapshot = await getDocs(collection(db, COLECCION));
    return querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

// 4. Función para ELIMINAR PROYECTO
export const eliminarProyecto = async (id) => {
    await deleteDoc(doc(db, COLECCION, id));
};


export const actualizarProyecto = async (id, campos) => {
    try {
        // Referencia al documento específico por su ID
        const proyectoRef = doc(db, COLECCION, id);
        // Actualizamos solo los campos que enviamos
        await updateDoc(proyectoRef, campos);
    } catch (error) {
        console.error("Error al actualizar:", error);
        throw error;
    }
};

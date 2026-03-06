import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage, auth } from "../Firebase/firebase";

const COLECCION = "proyectos";


export const subirImagen = async (archivo) => {
    if (!archivo) return null;
    const storageRef = ref(storage, `proyectos/${archivo.name}_${Date.now()}`);
    await uploadBytes(storageRef, archivo);
    const url = await getDownloadURL(storageRef);
    return url;
};

export const crearProyecto = async (datosProyecto, archivoImagen) => {
    try {
        let imagenUrl = "";

        if (archivoImagen) {
            imagenUrl = await subirImagen(archivoImagen);
        }
        else {
            imagenUrl = datosProyecto.imagen || "";
        }

        const docRef = await addDoc(collection(db, COLECCION), {
            nombre: datosProyecto.nombre,
            enlace: datosProyecto.enlace,
            descripcion: datosProyecto.descripcion,
            calificacion: datosProyecto.calificacion,
            imagen: imagenUrl,
            fechaCreacion: new Date()
        });

        return docRef.id;
    } catch (error) {
        console.error("Error al crear proyecto:", error);
        throw error;
    }
};

export const obtenerProyectos = async () => {
    const querySnapshot = await getDocs(collection(db, COLECCION));
    return querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

export const eliminarProyecto = async (id) => {
    await deleteDoc(doc(db, COLECCION, id));
};


export const actualizarProyecto = async (id, campos) => {
    try {
        const proyectoRef = doc(db, COLECCION, id);
        await updateDoc(proyectoRef, campos);
    } catch (error) {
        console.error("Error al actualizar:", error);
        throw error;
    }
};

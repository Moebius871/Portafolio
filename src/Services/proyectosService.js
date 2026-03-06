import { db } from "../Firebase/firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

const proyectosRef = collection(db, "proyectos");

export const crearProyecto = async (data) => {
  await addDoc(proyectosRef, data);
};

export const obtenerProyectos = async () => {
  const snapshot = await getDocs(proyectosRef);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const eliminarProyecto = async (id) => {
  const proyectoDoc = doc(db, "proyectos", id);
  await deleteDoc(proyectoDoc);
};

export const actualizarProyecto = async (id, data) => {
  const proyectoDoc = doc(db, "proyectos", id);
  await updateDoc(proyectoDoc, data);
};
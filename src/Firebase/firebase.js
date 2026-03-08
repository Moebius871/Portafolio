import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3Fe0ydNKP-F7wy2oe4D3xbFny4noQvT0",
  authDomain: "portafolio-dcd1b.firebaseapp.com",
  projectId: "portafolio-dcd1b",
  storageBucket: "portafolio-dcd1b.firebasestorage.app",
  messagingSenderId: "1005724145173",
  appId: "1:1005724145173:web:e64ed4da52b7260a02e01c",
  measurementId: "G-009ETKCN6E"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
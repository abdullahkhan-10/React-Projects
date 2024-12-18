import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDjriWUYxcVEgbr1ooj5PtWBgfzwbwJfjo",
  authDomain: "filmyworld-e3b1f.firebaseapp.com",
  projectId: "filmyworld-e3b1f",
  storageBucket: "filmyworld-e3b1f.firebasestorage.app",
  messagingSenderId: "434919549448",
  appId: "1:434919549448:web:1ce22b5f89ba0bef837fbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const moviesRef = collection(db, "movies")

export default app;
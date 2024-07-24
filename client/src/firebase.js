// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-90f00.firebaseapp.com",
  projectId: "real-estate-90f00",
  storageBucket: "real-estate-90f00.appspot.com",
  messagingSenderId: "251048213492",
  appId: "1:251048213492:web:9a8bf238135a46bab457a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-50a81.firebaseapp.com",
  projectId: "mern-estate-50a81",
  storageBucket: "mern-estate-50a81.appspot.com",
  messagingSenderId: "774054173775",
  appId: "1:774054173775:web:769474e9482b54e04b9e3a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

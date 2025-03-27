// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-ac6e6.firebaseapp.com",
  projectId: "mern-auth-ac6e6",
  storageBucket: "mern-auth-ac6e6.firebasestorage.app",
  messagingSenderId: "195425137329",
  appId: "1:195425137329:web:2eda83feb9da5de2346890"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
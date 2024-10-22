// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY,
  authDomain: "book-bazaar-79386.firebaseapp.com",
  projectId: "book-bazaar-79386",
  storageBucket: "book-bazaar-79386.appspot.com",
  messagingSenderId: "508661722963",
  appId: "1:508661722963:web:918ce8ea6a69cf2052bba6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// console.log('API Key:', process.env.REACT_APP_API_KEY);

export default app;
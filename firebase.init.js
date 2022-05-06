// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKSx030eYGFud5VjMc_NARv2OpQZyWNik",
  authDomain: "shafique-firm-house.firebaseapp.com",
  projectId: "shafique-firm-house",
  storageBucket: "shafique-firm-house.appspot.com",
  messagingSenderId: "271611107563",
  appId: "1:271611107563:web:8285565e8b3593cb80c6ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
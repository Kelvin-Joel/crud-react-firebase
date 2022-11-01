// Import the functions you need from the SDKs you need
import {getFirestore} from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsF_dctkRQQIoY7O_K-aVn9KWgmzq5gf8",
  authDomain: "crud-products-75fca.firebaseapp.com",
  projectId: "crud-products-75fca",
  storageBucket: "crud-products-75fca.appspot.com",
  messagingSenderId: "722345398390",
  appId: "1:722345398390:web:fabdf212be8332e9960f57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
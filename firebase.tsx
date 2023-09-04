// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkecvKunX0EaA9VYmQKwypWMrjd9swdvQ",
  authDomain: "eileens-corner.firebaseapp.com",
  projectId: "eileens-corner",
  storageBucket: "eileens-corner.appspot.com",
  messagingSenderId: "810785176671",
  appId: "1:810785176671:web:303d37f2ba5d791118efea",
  measurementId: "G-DCLL3XFJRQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

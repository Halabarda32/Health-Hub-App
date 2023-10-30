// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjZ5BH8412krd1Fp3K0gKFhfhyJAvVAZw",
  authDomain: "react-auth-5b5a0.firebaseapp.com",
  projectId: "react-auth-5b5a0",
  storageBucket: "react-auth-5b5a0.appspot.com",
  messagingSenderId: "246256466123",
  appId: "1:246256466123:web:16b84811f241a1de2d834e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
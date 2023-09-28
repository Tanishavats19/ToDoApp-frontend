// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPbmabVU42nafotE3nlxSixivrvfRz02w",
    authDomain: "todoapp-tanzv.firebaseapp.com",
    projectId: "todoapp-tanzv",
    storageBucket: "todoapp-tanzv.appspot.com",
    messagingSenderId: "256376223284",
    appId: "1:256376223284:web:10d4cea22c9c2420f47c61",
    measurementId: "G-F0SDTY46YY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
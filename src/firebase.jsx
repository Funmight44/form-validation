// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUh49AkusVbhjdajWMC6I2TAS7jrm44vs",
  authDomain: "user-info-90797.firebaseapp.com",
  projectId: "user-info-90797",
  storageBucket: "user-info-90797.firebasestorage.app",
  messagingSenderId: "17048037905",
  appId: "1:17048037905:web:b098f9264cd22e1fc79fb0",
  measurementId: "G-BC3PERLSM1"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
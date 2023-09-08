// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdqn89YxHBYUB2GQctAyMJkXSSkPnK7b0",
  authDomain: "chatnow-e50b1.firebaseapp.com",
  projectId: "chatnow-e50b1",
  storageBucket: "chatnow-e50b1.appspot.com",
  messagingSenderId: "402630448093",
  appId: "1:402630448093:web:ce418656c7b4cca7ed9c34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);

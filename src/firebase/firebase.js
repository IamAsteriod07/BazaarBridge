// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ8HjDv9S1J_MlzzOQaS5iRjhQyZohU4g",
  authDomain: "nextapp-2e8c5.firebaseapp.com",
  projectId: "nextapp-2e8c5",
  storageBucket: "nextapp-2e8c5.firebasestorage.app",
  messagingSenderId: "101854660298",
  appId: "1:101854660298:web:ea95216442b0dbd3341633",
  measurementId: "G-P89K8HH923"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app, auth, db };

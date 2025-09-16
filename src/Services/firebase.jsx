// src/Services/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
// import { getAnalytics } from "firebase/analytics"; // optional

const firebaseConfig = {
  apiKey: "AIzaSyB1wTMchjVNwZc90-_yOBlJ-hCoz7V6ZKc",
  authDomain: "foodie-95450.firebaseapp.com",
  databaseURL: "https://foodie-95450-default-rtdb.firebaseio.com",
  projectId: "foodie-95450",
  storageBucket: "foodie-95450.firebasestorage.app",
  messagingSenderId: "1068970511714",
  appId: "1:1068970511714:web:899ee6b15f408442fe303b",
  measurementId: "G-D1Z1P87JW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ⚡ Export Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

// (optional) only if you need analytics
// const analytics = getAnalytics(app);

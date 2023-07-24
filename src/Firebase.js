// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMtZyzYpX68cqmAFzz8WddxeLtO9twYYg",
  authDomain: "house-rent-8f940.firebaseapp.com",
  projectId: "house-rent-8f940",
  storageBucket: "house-rent-8f940.appspot.com",
  messagingSenderId: "1067363677640",
  appId: "1:1067363677640:web:a42099f4e1b4d3c4957cfd",
  measurementId: "G-6LCEXQJKK3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

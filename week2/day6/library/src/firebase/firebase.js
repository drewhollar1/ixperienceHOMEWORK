// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSbqQdp8pl1GWAwRIWTYpyybioG1mlvL0",
  authDomain: "library-6c58f.firebaseapp.com",
  projectId: "library-6c58f",
  storageBucket: "library-6c58f.appspot.com",
  messagingSenderId: "882438421330",
  appId: "1:882438421330:web:a696885de46b28ece0988b",
  measurementId: "G-HLJ5FNDYDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSbqQdp8pl1GWAwRIWTYpyybioG1mlvL0",
  authDomain: "library-6c58f.firebaseapp.com",
  projectId: "library-6c58f",
  storageBucket: "library-6c58f.appspot.com",
  messagingSenderId: "882438421330",
  appId: "1:882438421330:web:0e85ddced533ed03e0988b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};
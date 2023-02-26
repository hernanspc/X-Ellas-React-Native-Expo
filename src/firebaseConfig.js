import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQch6Zt_FgNJrE5J5gjq1oKMI6KApnyak",
  authDomain: "x-ellasapp.firebaseapp.com",
  databaseURL: "https://x-ellasapp-default-rtdb.firebaseio.com",
  projectId: "x-ellasapp",
  storageBucket: "x-ellasapp.appspot.com",
  messagingSenderId: "620354439118",
  appId: "1:620354439118:web:e2a9c51f868be0df6c0d9f",
  measurementId: "G-454ZHK3M7G"
};
// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();

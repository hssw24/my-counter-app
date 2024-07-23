import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, updateDoc, setDoc } from 'firebase/firestore';
//import "dotenv/config"


const firebaseConfig = {
    apiKey: "AIzaSyBzyUUvOX_tWon7w3tcRX35tHRC3GkfY-A",
    authDomain: "antischrei.firebaseapp.com",
    databaseURL: "https://antischrei-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "antischrei",
    storageBucket: "antischrei.appspot.com",
    messagingSenderId: "1033095781501",
    appId: "1:1033095781501:web:831488ad79931182ef6514"
  };


/*
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
*/

/*
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
*/

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, doc, updateDoc, setDoc };
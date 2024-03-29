// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUQagba5QzGe4lvF2Zr1LgPAbkJG2dw9U",
  authDomain: "citi-f6693.firebaseapp.com",
  projectId: "citi-f6693",
  storageBucket: "citi-f6693.appspot.com",
  messagingSenderId: "854607618827",
  appId: "1:854607618827:web:e4525d4607cabc1c74f80e"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

export { app, auth, database };
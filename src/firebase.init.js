// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClnQneee6zgr-hTDWiQHLEW3FYchBrVOA",
  authDomain: "cycle-4166f.firebaseapp.com",
  projectId: "cycle-4166f",
  storageBucket: "cycle-4166f.appspot.com",
  messagingSenderId: "602237681346",
  appId: "1:602237681346:web:2651757a8625893b33055b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth = getAuth(app)
export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `process.env.REACT_APP_KEY`,
  authDomain: "todo-list-b9272.firebaseapp.com",
  projectId: "todo-list-b9272",
  storageBucket: "todo-list-b9272.appspot.com",
  messagingSenderId: "846213076858",
  appId: "1:846213076858:web:be3f5b00fe3c919140a8c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
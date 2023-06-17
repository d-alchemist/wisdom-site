// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFfWWWWi6GQ5512NqNquEvYHEoILaCezE",
  authDomain: "wisdom-atom.firebaseapp.com",
  projectId: "wisdom-atom",
  storageBucket: "wisdom-atom.appspot.com",
  messagingSenderId: "46584408769",
  appId: "1:46584408769:web:127f5775825a14475c4240",
  measurementId: "G-6ZBPG0GVWX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

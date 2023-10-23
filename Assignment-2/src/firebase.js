// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAam9UerX8_bdCn6NeRIMRDWHBpBs8VyEg",
  authDomain: "react-project-assignment2.firebaseapp.com",
  projectId: "react-project-assignment2",
  storageBucket: "react-project-assignment2.appspot.com",
  messagingSenderId: "182539525630",
  appId: "1:182539525630:web:ecacfa26ec624ab5fb34af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

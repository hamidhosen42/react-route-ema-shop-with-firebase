// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA39YZIYxwyu6zurnlAlMqaLcu-BV_y91U",
  authDomain: "react-route-ema-shop-firebase.firebaseapp.com",
  projectId: "react-route-ema-shop-firebase",
  storageBucket: "react-route-ema-shop-firebase.appspot.com",
  messagingSenderId: "64085297912",
  appId: "1:64085297912:web:2417d50d88177a0d84490d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;
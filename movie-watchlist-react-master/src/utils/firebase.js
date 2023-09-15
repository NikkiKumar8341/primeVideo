// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkrY9ShX0YnfI-1k-8lbYaamoUc3g2jI0",
  authDomain: "moviemasti-c1506.firebaseapp.com",
  projectId: "moviemasti-c1506",
  storageBucket: "moviemasti-c1506.appspot.com",
  messagingSenderId: "571803140437",
  appId: "1:571803140437:web:e6a0350b891c9028e06fdc",
  measurementId: "G-H1ZG5EX0XR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_pmKtEysHsHf31bpYrcq3rjSGFsRt6f8",
  authDomain: "netflixgpt-586dd.firebaseapp.com",
  projectId: "netflixgpt-586dd",
  storageBucket: "netflixgpt-586dd.firebasestorage.app",
  messagingSenderId: "121503533243",
  appId: "1:121503533243:web:9bc87d1ef22c86c782819e",
  measurementId: "G-HQJF4Z43B2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTwjLHdPQrmDRLQ0AayeqcmgQKBxf-jkg",
  authDomain: "login-firebase-8baff.firebaseapp.com",
  projectId: "login-firebase-8baff",
  storageBucket: "login-firebase-8baff.appspot.com",
  messagingSenderId: "140298450758",
  appId: "1:140298450758:web:7709882d547cacaf769747",
  measurementId: "G-3C7JKDLJV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
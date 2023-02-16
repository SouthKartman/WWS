// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import{ getFirestore } from "firebase/firestore";
import{ getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFeeWP8U7y2ZlXk4BLQ1wX6wvhg4ieC3o",
  authDomain: "worlworksocial.firebaseapp.com",
  projectId: "worlworksocial",
  storageBucket: "worlworksocial.appspot.com",
  messagingSenderId: "396419686838",
  appId: "1:396419686838:web:25ad1c9d3a2022ef0f6117"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app,db,storage};
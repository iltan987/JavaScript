// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7wageOcAWDCQPVkflzURjfmzqE8LPqPo",
  authDomain: "chat-b8d2d.firebaseapp.com",
  projectId: "chat-b8d2d",
  storageBucket: "chat-b8d2d.appspot.com",
  messagingSenderId: "1022429615652",
  appId: "1:1022429615652:web:dacb904ef9fb1112ba6ab1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth();

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore();

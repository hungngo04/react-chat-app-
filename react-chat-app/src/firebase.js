import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAGDqsqR4q_A3iAhUbgy6oNd2sXlBLgr3k",
  authDomain: "chat-3bc39.firebaseapp.com",
  projectId: "chat-3bc39",
  storageBucket: "chat-3bc39.appspot.com",
  messagingSenderId: "781193634077",
  appId: "1:781193634077:web:35bb209358433abf2d01f4",
  measurementId: "G-ML5KEYL9ZD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

const analytics = getAnalytics(app);
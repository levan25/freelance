import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHUZisIcz42ssm--Gkm9oTqtp43EUh7xA",
  authDomain: "freelance-5ccdf.firebaseapp.com",
  projectId: "freelance-5 ccdf",
  storageBucket: "freelance-5ccdf.appspot.com",
  messagingSenderId: "817278871634",
  appId: "1:817278871634:web:1edc1cb9fe3605c9d0578b",
  measurementId: "G-KV7PKZ6DP3",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

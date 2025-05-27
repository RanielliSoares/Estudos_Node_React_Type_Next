
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDHnohzL7zg_cR33FtplWfxoj1Nf6PDGFc",
    authDomain: "reactlinks-f0dcf.firebaseapp.com",
    projectId: "reactlinks-f0dcf",
    storageBucket: "reactlinks-f0dcf.firebasestorage.app",
    messagingSenderId: "650108154330",
    appId: "1:650108154330:web:5ba1776da748a17612d0e3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
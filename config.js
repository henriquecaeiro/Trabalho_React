import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDKA5IIvWF-fkwiXp-iLA4d_n_71lyInkM",
    authDomain: "remember-8ece3.firebaseapp.com",
    projectId: "remember-8ece3",
    storageBucket: "remember-8ece3.appspot.com",
    messagingSenderId: "559976607173",
    appId: "1:559976607173:web:0babae00cfdee4ef1fefac",
    measurementId: "G-FWC2GLE4J6"
}


firebase.initializeApp(firebaseConfig)


export {firebase}
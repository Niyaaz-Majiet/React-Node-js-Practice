import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Test Account
const firebaseConfig = {
    apiKey: "AIzaSyDrj1WqQoYQEWjkvsNQkdJMAnaPubipFo4",
    authDomain: "flip-card-game-3fe51.firebaseapp.com",
    databaseURL: "https://flip-card-game-3fe51-default-rtdb.firebaseio.com",
    projectId: "flip-card-game-3fe51",
    storageBucket: "flip-card-game-3fe51.appspot.com",
    messagingSenderId: "690003997460",
    appId: "1:690003997460:web:4b498547a1297f72dc8801"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyApYmn4i0A-JWqd0ahqpcJ-GCO7ecGyhVc",
    authDomain: "invite-team-members.firebaseapp.com",
    projectId: "invite-team-members",
    storageBucket: "invite-team-members.appspot.com",
    messagingSenderId: "853866237924",
    appId: "1:853866237924:web:f11145e61b762aa0d301f1",
    measurementId: "G-JXT5BFHSG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)




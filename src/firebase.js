
import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCscuHHqVoCHsyYr1UA9A2QR-KblevZulc",
    authDomain: "to-do-544a7.firebaseapp.com",
    projectId: "to-do-544a7",
    storageBucket: "to-do-544a7.appspot.com",
    messagingSenderId: "85307334380",
    appId: "1:85307334380:web:2beac996e83976e5e20fc9",
    measurementId: "G-YR9BGJR65G"
})
const db = firebaseApp.firestore() 
export default db;
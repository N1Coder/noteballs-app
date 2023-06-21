// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBovQkTluB-QSt7TS9fGr2iuSePtldRROE",
  authDomain: "noteballs-app-fe8f8.firebaseapp.com",
  projectId: "noteballs-app-fe8f8",
  storageBucket: "noteballs-app-fe8f8.appspot.com",
  messagingSenderId: "686177755023",
  appId: "1:686177755023:web:691990bb775787856975fa",
  measurementId: "G-5FN7T1JZFL",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)

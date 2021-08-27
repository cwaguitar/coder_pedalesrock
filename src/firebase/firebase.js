import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC-bi5z5nqjzqXxrn1vQOWCq2unITYijjM",
  authDomain: "casamusical-63525.firebaseapp.com",
  projectId: "casamusical-63525",
  storageBucket: "casamusical-63525.appspot.com",
  messagingSenderId: "24551804314",
  appId: "1:24551804314:web:1d03af778bd78994f27e23",
  };
const app = firebase.initializeApp(firebaseConfig);
export function getFirebase() {
  return app;
}
export const database = firebase.firestore();
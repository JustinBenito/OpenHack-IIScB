import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvRA--6uDNf3QAkjxdwT0tC96UyJuK6nE",
  authDomain: "agriapp-59c85.firebaseapp.com",
  projectId: "agriapp-59c85",
  storageBucket: "agriapp-59c85.appspot.com",
  messagingSenderId: "624459069061",
  appId: "1:624459069061:web:154d004125d4eac358dbec"
};

initializeApp(firebaseConfig);

export const database=getFirestore();
export const auth=getAuth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDj3cyR63O-57ZRZN4SyFEpfltLpH8paps",
  authDomain: "mail-box-client-15051.firebaseapp.com",
  projectId: "mail-box-client-15051",
  storageBucket: "mail-box-client-15051.appspot.com",
  messagingSenderId: "342606063161",
  appId: "1:342606063161:web:8f4c82c44a61df06b30fe8",
  measurementId: "G-LH4BWTD82P",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)


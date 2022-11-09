import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDpUJGHP-OR3c_jp291MpjFDvuVvcxc_2I",
  authDomain: "instacart-5b0c5.firebaseapp.com",
  projectId: "instacart-5b0c5",
  storageBucket: "instacart-5b0c5.appspot.com",
  messagingSenderId: "26111419935",
  appId: "1:26111419935:web:aed4e14d1765b05feb172a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
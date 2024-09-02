import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore, collection, getDocs, doc, setDoc } from 'firebase/firestore';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdg_1wWKDI3GnhuBgMbhsELYz9lvANjZ0",
  authDomain: "schoolai-f0223.firebaseapp.com",
  projectId: "schoolai-f0223",
  storageBucket: "schoolai-f0223.appspot.com",
  messagingSenderId: "828391334116",
  appId: "1:828391334116:web:007f25cc2a763711410cf1",
  measurementId: "G-K09HF201C2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

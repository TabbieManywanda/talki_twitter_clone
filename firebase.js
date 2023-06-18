import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC3AzaETw2WioKc1eHBDgugKaHHNpTNp24",
    authDomain: "talki-project.firebaseapp.com",
    projectId: "talki-project",
    storageBucket: "talki-project.appspot.com",
    messagingSenderId: "289100059763",
    appId: "1:289100059763:web:fc7a8f7c55f5e66720c606",
    measurementId: "G-92Y9WMVEPE"
  };

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore();
  const storage = getStorage();

  export default app;
  export { db, storage };
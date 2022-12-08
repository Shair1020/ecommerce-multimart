// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_wiBgORK-cF1AiBa6pJt_TPJCZ8Nv9mI",
  authDomain: "multimart-f5a74.firebaseapp.com",
  projectId: "multimart-f5a74",
  storageBucket: "multimart-f5a74.appspot.com",
  messagingSenderId: "1085714234582",
  appId: "1:1085714234582:web:bfc945c4061fe884fc1d77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyA1Dft_sg2-1gAXJ4p7HsqFotguWrZdmFc",
  authDomain: "portfolio-e3939.firebaseapp.com",
  projectId: "portfolio-e3939",
  storageBucket: "portfolio-e3939.appspot.com",
  messagingSenderId: "211121596876",
  appId: "1:211121596876:web:c19a71d6d76af8d5511569",
  measurementId: "G-XGVQGZQ3DE",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD_IohVRU8L1ZCSopp0P-M_MWR5qcw1Q_A",
    authDomain: "portfolio-site-62bc0.firebaseapp.com",
    databaseURL: "https://portfolio-site-62bc0-default-rtdb.firebaseio.com",
    projectId: "portfolio-site-62bc0",
    storageBucket: "portfolio-site-62bc0.firebasestorage.app",
    messagingSenderId: "104045295607",
    appId: "1:104045295607:web:19a808eccb760a4a2660f2",  
    measurementId: "G-8YSYJ5366Q"
};
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


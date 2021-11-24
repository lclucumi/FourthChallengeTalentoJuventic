import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4dxA5OTxOxyRLmsioPXI5wCAdw6d7dVg",
  authDomain: "autenticationjuventic.firebaseapp.com",
  projectId: "autenticationjuventic",
  storageBucket: "autenticationjuventic.appspot.com",
  messagingSenderId: "577140250080",
  appId: "1:577140250080:web:bec8aa19788283aba08785",
  measurementId: "G-5SBENDWNRG",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

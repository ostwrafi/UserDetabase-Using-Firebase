import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDZv8zYhfK23wb41uic4xl7mLgjBfilBPY",
  authDomain: "silva-cdf71.firebaseapp.com",
  databaseURL: "https://silva-cdf71-default-rtdb.firebaseio.com",
  projectId: "silva-cdf71",
  storageBucket: "silva-cdf71.firebasestorage.app",
  messagingSenderId: "1062982262261",
  appId: "1:1062982262261:web:4997ef08f4372db41754bc",
  measurementId: "G-4E4M5BKRR2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };

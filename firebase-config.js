import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAeUDpmf19D1-znF1gaAGGRb-aPxtx1w70",
  authDomain: "myappauthsystem.firebaseapp.com",
  projectId: "myappauthsystem",
  storageBucket: "myappauthsystem.firebasestorage.app",
  messagingSenderId: "49270712977",
  appId: "1:49270712977:web:294b76448ab2b3c7602d30",
  databaseURL: "https://myappauthsystem-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
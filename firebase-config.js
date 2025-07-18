import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "ENTER_API_KEY_HERE",
  authDomain: "ENTER_AUTH_DOMAIN_HERE",
  projectId: "ENTER_PROJECT_ID_HERE",
  storageBucket: "ENTER_STORAGE_BUCKET_HERE",
  messagingSenderId: "ENTER_MESSAGING_SENDER_ID_HERE",
  appId: "ENTER_APP_ID_HERE",
  databaseURL: "ENTER_DATABASE_URL_HERE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };

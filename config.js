import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBKdlog5wwWEWtWrZaALpEMg5b6_nYIFCA",
  authDomain: "social-web-1eec5.firebaseapp.com",
  projectId: "social-web-1eec5",
  storageBucket: "social-web-1eec5.appspot.com",
  messagingSenderId: "17975110480",
  appId: "1:17975110480:web:e510e620b9d012ce31da55",
  measurementId: "G-M8Y29M2FD6"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
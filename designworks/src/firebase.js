import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4MOBfWTRx4f54d9EfiiD_52nTw43vt4w",
  authDomain: "appworksmidterm.firebaseapp.com",
  projectId: "appworksmidterm",
  storageBucket: "appworksmidterm.appspot.com",
  messagingSenderId: "203983139408",
  appId: "1:203983139408:web:22900163de8bdb1df55755",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

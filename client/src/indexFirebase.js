import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCTj5mEiSYrik2CRDb8H-J_1fgbPiucin0",
  authDomain: "fec-alpine-rockies.firebaseapp.com",
  projectId: "fec-alpine-rockies",
  storageBucket: "fec-alpine-rockies.appspot.com",
  messagingSenderId: "737532750714",
  appId: "1:737532750714:web:158dfcd2b60f46b88a04c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
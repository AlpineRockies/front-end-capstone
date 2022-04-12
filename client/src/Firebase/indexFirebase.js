import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREAPIKEY,
  authDomain: "apline-rockies-fec.firebaseapp.com",
  projectId: "apline-rockies-fec",
  storageBucket: "apline-rockies-fec.appspot.com",
  messagingSenderId: "934959723856",
  appId: process.env.FIREAPPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
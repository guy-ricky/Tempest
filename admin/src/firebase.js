import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: process.env.FIREBASE_AUTH,
  projectId: process.env.FIREBASE_ID,
  storageBucket: "upload-60513.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING,
  appId: process.env.FIREBASE_APP
};

const app = initializeApp(firebaseConfig);

export default app;
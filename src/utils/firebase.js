// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr6Bexy3_TKJH2KyeLX_wf0h9-Ac2Wbu8",
  authDomain: "netflixgpt-377a4.firebaseapp.com",
  projectId: "netflixgpt-377a4",
  storageBucket: "netflixgpt-377a4.appspot.com",
  messagingSenderId: "896898660558",
  appId: "1:896898660558:web:504312282f5393f447789f",
  measurementId: "G-YENVGP94L3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();

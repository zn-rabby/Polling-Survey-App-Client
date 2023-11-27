// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFvCydwkQjaS3SfDtDrTngYdGK25_pieg",
  authDomain: "polling-survey-app.firebaseapp.com",
  projectId: "polling-survey-app",
  storageBucket: "polling-survey-app.appspot.com",
  messagingSenderId: "252461700179",
  appId: "1:252461700179:web:8ac07f70db04201f80e2a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

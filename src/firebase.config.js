// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwf4UN__afYeVR0N2fZcGpk5CB6dF03hs",
  authDomain: "orebydb2308.firebaseapp.com",
  projectId: "orebydb2308",
  storageBucket: "orebydb2308.appspot.com",
  messagingSenderId: "87802855266",
  appId: "1:87802855266:web:524a50469283d5f391f63b",
  measurementId: "G-X4E3FL9VN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig; 
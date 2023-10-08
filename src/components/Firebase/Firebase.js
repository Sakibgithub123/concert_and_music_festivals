// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8lpWO7nThQSQAgZ6B6Rt_386q_NvOiRE",
  authDomain: "concert-and-music-festivals.firebaseapp.com",
  projectId: "concert-and-music-festivals",
  storageBucket: "concert-and-music-festivals.appspot.com",
  messagingSenderId: "492983873943",
  appId: "1:492983873943:web:348188cb011f7e90fa54d2",
  measurementId: "G-8M4RHT0QDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);
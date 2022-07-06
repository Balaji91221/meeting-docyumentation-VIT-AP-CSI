// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9WXwIvVufIA0gFrbHN0Iny24cUwkw600",
  authDomain: "meeting-documentation-ad718.firebaseapp.com",
  projectId: "meeting-documentation-ad718",
  storageBucket: "meeting-documentation-ad718.appspot.com",
  messagingSenderId: "243189768263",
  appId: "1:243189768263:web:fae4bafba1aef03a6ed162",
  measurementId: "G-SFKFZL4TYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu9MDIggIZhfbdIZFF-PTIzUkkykqK4cQ",
  authDomain: "whathasarchbeenlisteningto.firebaseapp.com",
  databaseURL: "https://whathasarchbeenlisteningto-default-rtdb.firebaseio.com",
  projectId: "whathasarchbeenlisteningto",
  storageBucket: "whathasarchbeenlisteningto.firebasestorage.app",
  messagingSenderId: "714913698641",
  appId: "1:714913698641:web:cf1f38d4d9483fe0e0f970",
  measurementId: "G-WV9SNMXNTL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { firebaseConfig, app, analytics };


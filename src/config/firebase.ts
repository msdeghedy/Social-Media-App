// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQVUmHf8DR8Lvry8-mkLLtjZdpkD9WFIU",
  authDomain: "react-social-media-364c2.firebaseapp.com",
  projectId: "react-social-media-364c2",
  storageBucket: "react-social-media-364c2.appspot.com",
  messagingSenderId: "701669378626",
  appId: "1:701669378626:web:7f632701b370b3dde87bdb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

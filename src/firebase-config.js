// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBmnBYLKQRvK7vrLUcKVJuP2jkuQX0mK5k",
  authDomain: "friendlychat-a55d3.firebaseapp.com",
  projectId: "friendlychat-a55d3",
  storageBucket: "friendlychat-a55d3.appspot.com",
  messagingSenderId: "1068547216463",
  appId: "1:1068547216463:web:4fd53e3970e16491f6863a"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}

// Initialize Firebase
const app = initializeApp(config);
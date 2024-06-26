// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const environment = {
    production: false,
     firebase: {
        apiKey: "AIzaSyBxpLAWueQnR6cfSP82DlgDvNjNEp3mtjA",
        authDomain: "login-tradicional-3b3f8.firebaseapp.com",
        projectId: "login-tradicional-3b3f8",
        storageBucket: "login-tradicional-3b3f8.appspot.com",
        messagingSenderId: "104856885948",
        appId: "1:104856885948:web:e7d7880cdb3b1086fdceb9",
        measurementId: "G-T15PBMM593"
    }
  };


// Initialize Firebase
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);
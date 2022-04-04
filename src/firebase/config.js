import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAm0y_zBWfgT6f9KuiJUl4BNzGmKkuwYAQ",
    authDomain: "website7ez.firebaseapp.com",
    projectId: "website7ez",
    storageBucket: "website7ez.appspot.com",
    messagingSenderId: "677834487560",
    appId: "1:677834487560:web:2e144f059cd244f86d1ebd"
  };

  initializeApp(firebaseConfig)



  const db = getFirestore ()

  const auth = getAuth()

  export { db, auth }
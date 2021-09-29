import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCOpmYSiUAa4V2sUVYE8ZvJYwJPUweEFb4",
    authDomain: "twitter-clone-8daee.firebaseapp.com",
    projectId: "twitter-clone-8daee",
    storageBucket: "twitter-clone-8daee.appspot.com",
    messagingSenderId: "212567603067",
    appId: "1:212567603067:web:76d6ebf3abfa45987a6fde"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
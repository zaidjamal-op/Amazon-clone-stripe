import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRqg6YqueaAwfAyq959dS5EXkf7431GuU",
  authDomain: "amzn-e29f7.firebaseapp.com",
  projectId: "amzn-e29f7",
  storageBucket: "amzn-e29f7.appspot.com",
  messagingSenderId: "891723464063",
  appId: "1:891723464063:web:9b8a69eb9bfbe93e1fae4a",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;

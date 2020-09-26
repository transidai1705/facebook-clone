// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3pagx6yJJ2F0-VIKA1b7tuDdEMg3KxXI",
  authDomain: "facebook-clone-24178.firebaseapp.com",
  databaseURL: "https://facebook-clone-24178.firebaseio.com",
  projectId: "facebook-clone-24178",
  storageBucket: "facebook-clone-24178.appspot.com",
  messagingSenderId: "144659193580",
  appId: "1:144659193580:web:0a4b8e869a54284c568fc9",
  measurementId: "G-M8J59J4B23",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

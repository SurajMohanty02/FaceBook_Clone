import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBCUVXwgT6AUtNlQYdndZyS1qMxJwnxJig",
  authDomain: "fbclone-cc2f1.firebaseapp.com",
  databaseURL: "https://fbclone-cc2f1.firebaseio.com",
  projectId: "fbclone-cc2f1",
  storageBucket: "fbclone-cc2f1.appspot.com",
  messagingSenderId: "935336437977",
  appId: "1:935336437977:web:d4c076a2bf10d64db6f6c8",
  measurementId: "G-2C39J2QNNB",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, storage, provider };
export default db;

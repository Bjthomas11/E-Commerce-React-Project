import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBeAjOHR3EXiQbVEu7WHRGJG1gvmWRRPzQ",
  authDomain: "crwn-db-8ebd3.firebaseapp.com",
  databaseURL: "https://crwn-db-8ebd3.firebaseio.com",
  projectId: "crwn-db-8ebd3",
  storageBucket: "crwn-db-8ebd3.appspot.com",
  messagingSenderId: "579294801892",
  appId: "1:579294801892:web:2cc611666a9154ce2921f1",
  measurementId: "G-SQ5EQ890EC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

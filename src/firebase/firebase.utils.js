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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    // new js date object
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log(collectionRef);

  const batch = firestore.batch();

  // Loop through batch to get the new doc ref
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    // console.log(newDocRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

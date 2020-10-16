import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
        apiKey: "AIzaSyDK4IOEJ8-I74VjXJgD0alwBZlD8eX65YY",
        authDomain: "crwn-db-9aaed.firebaseapp.com",
        databaseURL: "https://crwn-db-9aaed.firebaseio.com",
        projectId: "crwn-db-9aaed",
        storageBucket: "crwn-db-9aaed.appspot.com",
        messagingSenderId: "75442460231",
        appId: "1:75442460231:web:5908ee674fee9e71278362"
      };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();


  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      }) 
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;

};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Constants from 'expo-constants';

// Firebase config
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
  databaseURL: Constants.manifest.extra.databaseURL,
};

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
} else {
  Firebase = firebase.app();
}

const database = Firebase.firestore();
const auth = firebase.auth();

export { database, auth };
export default Firebase;

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

console.log(process.env);

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// })

const app = firebase.initializeApp( {
  apiKey: "AIzaSyC7gmFhyG3uZNdUa_dn7kUBDtlwk7GeS2c",
  authDomain: "auth-d7a59.firebaseapp.com",
  projectId: "auth-d7a59",
  storageBucket: "auth-d7a59.appspot.com",
  messagingSenderId: "788417744742",
  appId: "1:788417744742:web:35c8b70eaa93a7680c82a7",
  measurementId: "G-HV1ERBS710"
})


export const auth = app.auth()
export default app

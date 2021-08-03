// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBdm7QP2MOF8XLuq3rlothNQjEX5sEXlzc",
    authDomain: "imessage-app-92857.firebaseapp.com",
    projectId: "imessage-app-92857",
    storageBucket: "imessage-app-92857.appspot.com",
    messagingSenderId: "233086775315",
    appId: "1:233086775315:web:c55fb98fbb2da4d48c0fe6",
    measurementId: "G-KHB9E43BLP"
  };
const firebaseApp =firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export {auth,provider};
export default db;
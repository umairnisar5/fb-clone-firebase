import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_otVdzhuL42CJFCcH0hHlk3-8eRKinYA",
  authDomain: "facebook-clone-a74cf.firebaseapp.com",
  databaseURL: "https://facebook-clone-a74cf.firebaseio.com",
  projectId: "facebook-clone-a74cf",
  storageBucket: "facebook-clone-a74cf.appspot.com",
  messagingSenderId: "661859260017",
  appId: "1:661859260017:web:73875acab0907d108fadd0",
  measurementId: "G-NZLXEK8YS5"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;

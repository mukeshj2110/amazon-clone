import firebase from "firebase";


 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDbupcmjpJabJvFgJOx9LmL2Nd1BT0aFXQ",
    authDomain: "clone-new-917ee.firebaseapp.com",
    projectId: "clone-new-917ee",
    storageBucket: "clone-new-917ee.appspot.com",
    messagingSenderId: "347371955218",
    appId: "1:347371955218:web:433c4deea000ef6866a4cb"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db , auth};
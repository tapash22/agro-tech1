import firebase from 'firebase';
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyBvpsgbG73DXCBaGFhCxw4lHXlpqzej92w" ,
    authDomain: "agro-tech-2885e.firebaseapp.com",
    projectId: "agro-tech-2885e",
    storageBucket: "agro-tech-2885e.appspot.com",
    messagingSenderId: "166476037107",
    appId: "1:166476037107:web:5a0187cb68e2e0ee30b086",
    measurementId: "G-ELSTMDLYCY"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export { fb,db };
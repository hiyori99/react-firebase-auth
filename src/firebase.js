// import firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import * as firebase from "firebase/app";
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCo6RFHBiDoqhGFc5CL9e4bsk8zP59ekus",
  authDomain: "react-auth-57400.firebaseapp.com",
  projectId: "react-auth-57400",
  storageBucket: "react-auth-57400.appspot.com",
  messagingSenderId: "747588398648",
  appId: "1:747588398648:web:352882792a537ac8eb40cd"
};

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth() 
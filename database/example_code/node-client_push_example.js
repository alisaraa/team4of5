// adapted from https://howtofirebase.com/save-and-query-firebase-data-ed73fb8c6e3a
var firebase = require('firebase');
firebase.initializeApp({
 "appName": "AIzaSyCl4pd35HfQuBTph08pgG2S9qXTFRZn1Ag",
 "serviceAccount": "./service-account.json",
 "authDomain": "team4of5-8d52e.firebaseapp.com",
 "databaseURL": "https://team4of5-8d52e.firebaseio.com",
 "storageBucket": "team4of5-8d52e.appspot.com",
});
var ref = firebase.app().database().ref();
var usersRef = ref.child('users');


//set
usersRef.set({
  adminuser: {
    first_name: "Administrator",
    last_name: "User",
    role: "admin",
  },
  auser: {
    first_name: "Random",
    last_name: "User",
    role: "basic",
  }
});


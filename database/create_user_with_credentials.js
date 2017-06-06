var firebase = require('firebase');
firebase.initializeApp({
 "apiKey": "AIzaSyCl4pd35HfQuBTph08pgG2S9qXTFRZn1Ag",
 "appName": "AIzaSyCl4pd35HfQuBTph08pgG2S9qXTFRZn1Ag",
 "serviceAccount": "./service-account.json",
 "authDomain": "team4of5-8d52e.firebaseapp.com",
 "databaseURL": "https://team4of5-8d52e.firebaseio.com",
 "storageBucket": "team4of5-8d52e.appspot.com",
});
var ref = firebase.app().database().ref();
var usersRef = ref.child('users');


var user_email = 'araylw12@gmail.com'
var user_pass = 'abcdef5'


var create_user = function(user_email, user_pass){
      firebase.auth().createUserWithEmailAndPassword(user_email, user_pass).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("ERROR");
        console.log(errorCode, errorMessage);
      });
      console.log("User " + user_email + " created at " + Date.now())
}

create_user(user_email, user_pass);
var firebase = require('firebase');
firebase.initializeApp({
 "apiKey": "AIzaSyCl4pd35HfQuBTph08pgG2S9qXTFRZn1Ag",
 "serviceAccount": "./service-account.json",
 "authDomain": "team4of5-8d52e.firebaseapp.com",
 "databaseURL": "https://team4of5-8d52e.firebaseio.com",
 "storageBucket": "team4of5-8d52e.appspot.com",
});
var ref = firebase.app().database().ref();
var usersRef = ref.child('users');


var user_email = 'araylw12@gmail.com';
var user_pass = 'abcdef5';
var user_first_name = "Z";
var user_last_name =  "XdsasX";
var user_role = "admin";

function update_user_info(user_first_name, user_last_name,user_role, user_email, user_pass){
      firebase.auth().signInWithEmailAndPassword(user_email, user_pass).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });

      firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("user found!")
        console.log("user " + user.uid + " logged in");
        var user_uid = user.uid;
        var thisUserRef = usersRef.child(user_uid);
              thisUserRef.update({
              // first_name: user_first_name,
              // last_name: user_last_name,
              role: user_role,
              last_login_dtm: Date.now(),

        });
          return;
      } 
  });
      return;
} 


update_user_info(user_first_name, user_last_name,user_role, user_email, user_pass);
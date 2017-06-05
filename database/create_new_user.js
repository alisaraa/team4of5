// adapted from https://howtofirebase.com/save-and-query-firebase-data-ed73fb8c6e3a
//check if exists reference: https://gist.github.com/anantn/4323949

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


var user_login = "ALISA2";
var user_first_name = "Z";
var user_last_name =  "XdsasX";
var user_role = "admin";


var check_user = function(user_login,user_first_name, user_last_name, user_role){
  usersRef.child(user_login).once('value', function(snapshot) {
      var exists = (snapshot.val() !== null);
      console.log(exists);
      if (!exists) {
        create_user(user_login,user_first_name, user_last_name, user_role)
      }
      else {
        process.exit()
      };
    });
};

var create_user = function(user_login, user_first_name, user_last_name, user_role){
      usersRef.update({
        [user_login]: {
        first_name: user_first_name,
        last_name: user_last_name,
        role: user_role,
        }
      });
    return 1;
}

check_user(user_login,user_first_name, user_last_name, user_role);
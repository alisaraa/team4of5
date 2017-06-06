var firebase = require('firebase');
firebase.initializeApp({
 "appName": "AIzaSyCl4pd35HfQuBTph08pgG2S9qXTFRZn1Ag",
 "serviceAccount": "./service-account.json",
 "authDomain": "team4of5-8d52e.firebaseapp.com",
 "databaseURL": "https://team4of5-8d52e.firebaseio.com",
 "storageBucket": "team4of5-8d52e.appspot.com",
});
var ref = firebase.app().database().ref();

var subject = 'users'
var key = 'ALISA9'


var retrieve_user_info = function(subject, key){
  var usersRef = ref.child(subject);
  var key = key;
  usersRef.child(key).once('value', function(snapshot) {
      var exists = (snapshot.val() !== null);
      if (exists) {
        console.log(snapshot.val())
      }
      else {
      	console.log("Subject/key pair not found not found")
      };
      process.exit()
    });
};



retrieve_user_info(subject, key);
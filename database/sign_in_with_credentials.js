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


var user_email = 'araylw12@gmail.com';
var user_pass = 'abcdef5';


function sign_in_user(user_email, user_pass){
		firebase.auth().signInWithEmailAndPassword(user_email, user_pass).catch(function(error) {
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  console.log(errorMessage);
		});

		firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
		    console.log("user " + user.uid + " logged in");
		    var user_uid = user.uid;
		    var thisUserRef = usersRef.child(user_uid);

		          thisUserRef.update({
			        display_name: user.displayName,
			        last_login_dtm: Date.now(),
     		});
      		return;
		  } 
		});
		return;
};

sign_in_user(user_email, user_pass);

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

var delayedPush = function (user) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      usersRef.push(user)
        .then(resolve, reject);
    }, 1);
  });
};

delayedPush({
  name: 'First User',
  time: (new Date()).getTime()
})
.then(function() {
  return delayedPush({
    name: 'Second User',
    time: (new Date()).getTime()
  });
})
.then(function() {
  return delayedPush({
    name: 'Third User',
    time: (new Date()).getTime()
  });
})
.then(function() {
  usersRef.orderByKey().on('child_added', function(snap) {
    console.log(snap.getKey(), snap.val());
  });
})
.catch(function(err) {
  console.log('error', err);
});
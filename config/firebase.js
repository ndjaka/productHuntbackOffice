var firebase = require('firebase')

var firebaseConfig = {
    apiKey: "AIzaSyA_VH5Tv6Onrqipx9ITDWzsD67Oo8LFlZw",
    authDomain: "avian-insight-228912.firebaseapp.com",
    databaseURL: "https://avian-insight-228912.firebaseio.com",
    projectId: "avian-insight-228912",
    storageBucket: "avian-insight-228912.appspot.com",
    messagingSenderId: "540972980811",
    appId: "1:540972980811:web:5b0a85e2af6786084e8bce"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase
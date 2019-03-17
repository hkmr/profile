import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAF7Z-Y7roSk2E40hXjr1UxWi9glUTq3DI",
  authDomain: "harshprofileinfo.firebaseapp.com",
  databaseURL: "https://harshprofileinfo.firebaseio.com",
  projectId: "harshprofileinfo",
  storageBucket: "harshprofileinfo.appspot.com",
  messagingSenderId: "687578057195"
};

var fire = firebase.initializeApp(config);

export default fire;
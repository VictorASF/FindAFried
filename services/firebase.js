import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCJFjjg3NfWpRRTagnWS9_sJ1ncsiPXDXY",
    authDomain: "findafriend-364bd.firebaseapp.com",
    projectId: "findafriend-364bd",
    storageBucket: "findafriend-364bd.appspot.com",
    messagingSenderId: "783639674368",
    appId: "1:783639674368:web:6025af2a046afee992a2e5",
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

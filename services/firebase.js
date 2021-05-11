import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDkimrwPf1dq4Dl_A9pa9DwJtauYIzgV6s",
  authDomain: "grupou-822-me.firebaseapp.com",
  projectId: "grupou-822-me",
  storageBucket: "grupou-822-me.appspot.com",
  messagingSenderId: "378920762696",
  appId: "1:378920762696:web:ab7a2bf51ab7df998d077d"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

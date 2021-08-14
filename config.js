import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAYR5ky5mINhyMoLZ2XXh6cd6I5dPk1UIs",
    authDomain: "school-attendence-app-92d27.firebaseapp.com",
    databaseURL: "https://school-attendence-app-92d27-default-rtdb.firebaseio.com",
    projectId: "school-attendence-app-92d27",
    storageBucket: "school-attendence-app-92d27.appspot.com",
    messagingSenderId: "739826702080",
    appId: "1:739826702080:web:f49079d796fe32a30d45e5",
    measurementId: "G-Y8R1SYNJT0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();
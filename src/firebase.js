import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyDubP_VnTbRkb08f_x-CRO95220uoZB3yM",
    authDomain: "deriada-crud-a6804.firebaseapp.com",
    projectId: "deriada-crud-a6804",
    storageBucket: "deriada-crud-a6804.appspot.com",
    messagingSenderId: "587459883529",
    appId: "1:587459883529:web:66d1f8d14a16b2e2613ed8"
  };
  

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
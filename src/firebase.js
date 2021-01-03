
const firebaseConfig = {

  };

import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCd20XFsp0feq4MXBpLXkshF3rvRUKgoG8",
    authDomain: "todoapp-b35c2.firebaseapp.com",
    projectId: "todoapp-b35c2",
    storageBucket: "todoapp-b35c2.appspot.com",
    messagingSenderId: "218729602191",
    appId: "1:218729602191:web:505004df446e633003e4fa",
    measurementId: "G-MRSWXE38PW"

})

const db = firebaseApp.firestore()



export default db


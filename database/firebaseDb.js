import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxx-00000.firebaseapp.com",
    databaseURL: "https://xxxxxxxxx-00000.firebaseio.com",
    projectId: "xxxxxxxxx-00000",
    storageBucket: "xxxxxxxxx-00000.appspot.com",
    messagingSenderId: "000000000000000",
    appId: "1:000000000000000:web:000000000000000"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
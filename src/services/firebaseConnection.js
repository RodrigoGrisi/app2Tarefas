import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database';

let firebaseConfig = {
// COLOQUE SUAS CONFIGS DO FIREBASE AQUI 
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
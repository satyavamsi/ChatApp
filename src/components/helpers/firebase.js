import firebase from 'firebase';

//firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBleefU7X6aYDvczHFLVkttSEHz6snxOi4",
    authDomain: "chat-app-17bf8.firebaseapp.com",
    databaseURL: "https://chat-app-17bf8.firebaseio.com",
    projectId: "chat-app-17bf8",
    storageBucket: "chat-app-17bf8.appspot.com",
    messagingSenderId: "533056619648",
    appId: "1:533056619648:web:41878c948f51cb2f22d265",
    measurementId: "G-9R7KXP3YBF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;

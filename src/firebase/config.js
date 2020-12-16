import { firebase } from '@firebase/app';

import '@firebase/auth';
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAoRB0A4TcGLWmwpwqxcCCh033-Hwst0ZI",
    authDomain: "humantekmobileapp.firebaseapp.com",
    databaseURL: "https://humantekmobileapp.firebaseio.com",
    projectId: "humantekmobileapp",
    storageBucket: "humantekmobileapp.appspot.com",
    messagingSenderId: "642830365173",
    appId: "1:642830365173:web:a8eb403026e45b9e43b0bc",
    measurementId: "G-DE79R8E891"
};

firebase.initializeApp(firebaseConfig);


export { firebase };
import * as firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB5-WAr68sl8a3Q7biCXsUM-ABnPry2iRQ",
    authDomain: "experience-portfolio.firebaseapp.com",
    databaseURL: "https://experience-portfolio.firebaseio.com",
    projectId: "experience-portfolio",
    storageBucket: "experience-portfolio.appspot.com",
    messagingSenderId: "190671985527",
    appId: "1:190671985527:web:67693050c9615905975f72",
    measurementId: "G-STKZ9NJ30S"
};

const app = firebase.initializeApp(firebaseConfig);
export default app.storage();
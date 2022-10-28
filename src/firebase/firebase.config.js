// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDac1EPt2IwdVvBKtEzyby3-QMhQ6S6wW4",
//     authDomain: "expert-learning-4a1c6.firebaseapp.com",
//     projectId: "expert-learning-4a1c6",
//     storageBucket: "expert-learning-4a1c6.appspot.com",
//     messagingSenderId: "420232256444",
//     appId: "1:420232256444:web:f81970eeffe3c22cfda9b9"
// };
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
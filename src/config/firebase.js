import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC92HUTf_NNsqOO5F5d6h5DZXZTgGE947M",
    authDomain: "expertizo1.firebaseapp.com",
    projectId: "expertizo1",
    storageBucket: "expertizo1.appspot.com",
    messagingSenderId: "542557284195",
    appId: "1:542557284195:web:7f54a9dd5815a259a21556"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

function register(emailUpdate, passwordUpdate) {

    createUserWithEmailAndPassword(auth, emailUpdate, passwordUpdate)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // Showing alert for Successfully Signed up
            alert('Successfully Registerd')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // Showing alert when received error

            alert(errorMessage)
        });

}

function login(emailUpdate, passwordUpdate) {

    signInWithEmailAndPassword(auth, emailUpdate, passwordUpdate)
        .then((userCredential) => {
            // Showing alert for Successfully Signed In
            const user = userCredential.user;
            // Showing alert when received error
            alert('Successfully Login')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });

}


export { register, login }






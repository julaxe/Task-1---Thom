import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAtoeivj0sdP_wrMwWXFKqe4fvbDfpU8A4",
    authDomain: "auth-task1-thom.firebaseapp.com",
    projectId: "auth-task1-thom",
    storageBucket: "auth-task1-thom.appspot.com",
    messagingSenderId: "58790492812",
    appId: "1:58790492812:web:07b87cb1a837ce4dad59a9"
})

export const auth = app.auth()
export default app
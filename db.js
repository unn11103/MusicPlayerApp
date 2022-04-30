import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
 let config = {
    apiKey: "AIzaSyA_qpYPQMiIGZXMMXskqBxU-xA4Gn6dyDs",
    authDomain: "spotifyclone-c084b.firebaseapp.com",
    projectId: "spotifyclone-c084b",
    storageBucket: "spotifyclone-c084b.appspot.com",
    messagingSenderId: "897397064169",
    appId: "1:897397064169:web:c33b95143b69a331040b78",
    measurementId: "G-MYQYM6BJX9"
  };
let app = initializeApp(config, {useFetchStreams: false});
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true
})//getFirestore(app); //.database() not work
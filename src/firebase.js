// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyqTckYHkIrx79deUc2tozZpX_1m31Bnk",
  authDomain: "threadapp-1e40d.firebaseapp.com",
  projectId: "threadapp-1e40d",
  storageBucket: "threadapp-1e40d.appspot.com",
  messagingSenderId: "259506163400",
  appId: "1:259506163400:web:74ddaecf3bca4833c49ffd",
  measurementId: "G-JD3ZZWHV0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//인증서비스 사용할것임
export const auth = getAuth(app); 

//데이터베이스 서비스 사용하겠다.
export const db = getFirestore(app); 
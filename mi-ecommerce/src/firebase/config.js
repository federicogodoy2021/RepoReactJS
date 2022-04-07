import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCIGrtn9FFCAtrMzRYbcxjhn00RJPYNBII",
  authDomain: "mi-e-commerce-react.firebaseapp.com",
  projectId: "mi-e-commerce-react",
  storageBucket: "mi-e-commerce-react.appspot.com",
  messagingSenderId: "307562262475",
  appId: "1:307562262475:web:4f834fb6aaa7536508504e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () =>{
    return app
}
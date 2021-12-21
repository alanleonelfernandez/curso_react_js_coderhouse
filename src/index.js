import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { products } from './components/ItemList/Items';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { collection, addDoc, getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAM9GBIBYqRddaqS4ngqGO2rtL_o7tbNlk",
    authDomain: "arm-boots.firebaseapp.com",
    projectId: "arm-boots",
    storageBucket: "arm-boots.appspot.com",
    messagingSenderId: "524364585404",
    appId: "1:524364585404:web:e9525d060d66a3833d33b9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

/* 
const db = getFirestore()
const ref = collection(db, 'products')

products.map((product)=> addDoc(ref, product)) */

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

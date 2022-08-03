import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap-icons/font/bootstrap-icons.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAaOTNMMl8NStfCAtd7H0nGCb8FXLa9ozI",
  authDomain: "roma-pastas.firebaseapp.com",
  projectId: "roma-pastas",
  storageBucket: "roma-pastas.appspot.com",
  messagingSenderId: "696436054675",
  appId: "1:696436054675:web:492e4ac933d7c43eca4b66"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

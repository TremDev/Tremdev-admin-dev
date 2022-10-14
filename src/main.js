import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

import 'animate.css'

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMe0alSBORKAd_Qja8IJT7Aoe4JRhhNa0",
  authDomain: "portfolio-tremdev.firebaseapp.com",
  databaseURL: "https://portfolio-tremdev-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-tremdev",
  storageBucket: "portfolio-tremdev.appspot.com",
  messagingSenderId: "282331854984",
  appId: "1:282331854984:web:5d374e020141d77c38073d",
  measurementId: "G-EV3T0M4FHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app)

createApp(App).use(store).use(db).use(router).mount('#app')

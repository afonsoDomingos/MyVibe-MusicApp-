import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"



//const firebaseConfig = {
 // apiKey: "AIzaSyBFzHvDeThV7HcmplgmBiDtzQubY3l_Wus",
  //authDomain: "getback-aecca.firebaseapp.com",
 /// projectId: "getback-aecca",
 // storageBucket: "getback-aecca.appspot.com",
 // messagingSenderId: "216658185480",
  //appId: "1:216658185480:web:e659bbfd6aaa20058970bd"
//};

const firebaseConfig = {
  apiKey: "AIzaSyAWsvmMyM7osRCOu0miTeMKfXUieV8uywo",
  authDomain: "vibeauth-27be5.firebaseapp.com",
  projectId: "vibeauth-27be5",
  storageBucket: "vibeauth-27be5.appspot.com",
  messagingSenderId: "896143180816",
  appId: "1:896143180816:web:80d93945391b95c8477695",
  measurementId: "G-20TZCTF13W"
};



const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }
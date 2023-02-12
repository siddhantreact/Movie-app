 import { initializeApp } from "firebase/app";
 import {getAuth} from "firebase/auth"

 const firebaseConfig = {
  apiKey: "AIzaSyALoqWPiSHtftPuLqOloiuDWWNwmS5ixpY",
  authDomain: "movie-app-9a448.firebaseapp.com",
  projectId: "movie-app-9a448",
  storageBucket: "movie-app-9a448.appspot.com",
  messagingSenderId: "183038634897",
  appId: "1:183038634897:web:b80eeb31e3480e2ca4c830"
};


const app = initializeApp(firebaseConfig);

//we need authentiation import that and call that function "getAuth"

const auth = getAuth()


export {app,auth}




//GetAuth. Returns the FirebaseAuth object for an App. Creates the FirebaseAuth if required.
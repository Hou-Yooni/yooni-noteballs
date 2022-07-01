
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwYQCyrKx6jweDIyAa0xmhajGo3UJGp7g",
  authDomain: "noteballs-a0545.firebaseapp.com",
  projectId: "noteballs-a0545",
  storageBucket: "noteballs-a0545.appspot.com",
  messagingSenderId: "326200465128",
  appId: "1:326200465128:web:69d65f41f49de621a71b5d"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)


export { db, auth }
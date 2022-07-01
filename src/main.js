import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router";

// import firebase from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyBXyeHpdMseD5uYK8tvNXSD5bsAr3EhLy8",
//   authDomain: "yooniweb.firebaseapp.com",
//   datebaseURL: "https://yooniweb-default-rtdb.firebaseio.com/",
//   projectId: "yooniweb",
//   storageBucket: "yooniweb.appspot.com",
//   messagingSenderId: "944935607317",
//   appId: "1:944935607317:web:494a50fe64305193e3021c",
//   measurementId: "G-JZ9VRXZN6B",
// };

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const pinia = createPinia()
pinia.use(({store}) => {
  store.router = markRaw(router)
})

createApp(App).use(pinia).use(router).mount("#app");

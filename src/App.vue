<template>
  <NavBar />

  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
  <!-- <div>
    <h1>Sigin</h1>
    <input type="email" placeholder="email" v-model="siginUpemail" />
    <input type="password" placeholder="password" v-model="siginUppassword" />
    <button @click="siginUp">Sigin</button>
  </div> -->
  <!-- <div>
    <h1>Login</h1>
    <input type="email" placeholder="email" v-model="loginEmail" />
    <input type="password" placeholder="password" v-model="loginPassword" />
    <button @click="login">Login</button>
  </div> -->
</template>

<script setup>
/*
  imports
*/
import { ref, onMounted } from "vue";
import NavBar from "@/components/Layout/NavBar.vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { useStoreAuth } from "@/stores/storeAuth";


/* store */
const storeAuth = useStoreAuth()

/* mounted */
onMounted(() => {
  storeAuth.init()
})

// import firebase from "firebase";

// const siginUpemail = ref("");
// const siginUppassword = ref("");
// const siginUp = () => {
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(siginUpemail.value, siginUppassword.value)
//     .then(() => {
//       console.log("sigin success");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// const loginEmail = ref("");
// const loginPassword = ref("");
// const login = () => {
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(loginEmail.value, loginPassword.value)
//     .then(() => {
//       console.log("login success");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// // Realtime Datebase
// // const db = firebase.database()
// // const msgRef = db.ref('messages')
// // msgRef.on('value', snapshot => {
// //   console.log(snapshot.val())
// // })
// // const key = msgRef.push().key
// // msgRef.child(key).set({
// //   message: 'hello'
// // })

// // Firestore Datebase
// const db = firebase.firestore();
// const refDB = db.collection("fruit").doc("apple");
// refDB
//   .set({
//     price: 500,
//     count: 480,
//   })
//   .then(() => {
//     console.log("set data successful");
//   });

const filter = (...args) => {
  return args.filter((item) => item.price === 1);
};
console.log(filter({ price: 1 }, { price: 2 }));

const [num1, num2] = [1, 2];
console.log(num1, num2);
</script>

<style>
@import "bulma/css/bulma.min.css";
</style>

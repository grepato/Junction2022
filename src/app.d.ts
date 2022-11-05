// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Locals {
    userid: string;
  }

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDnJxLnIF36kWF4m3TurylzNFsTRBKbCYM",
    authDomain: "junction2022-9c1e2.firebaseapp.com",
    projectId: "junction2022-9c1e2",
    storageBucket: "junction2022-9c1e2.appspot.com",
    messagingSenderId: "183060803302",
    appId: "1:183060803302:web:2b80136bd16bfc9c4a5527"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // interface Platform {}

  // interface PrivateEnv {}

  // interface PublicEnv {}
}

import {  signInWithEmailAndPassword , GoogleAuthProvider  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";

const input_form = document.querySelector('#input_form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const googlelogin = document.querySelector('#googlelogin')

input_form.addEventListener('submit', event => {
  event.preventDefault();
  // const auth = getAuth();
signInWithEmailAndPassword(auth, email.value, password.value)
  .then((result) => {
     
    const user = result.user;
    console.log(user);
    email.value = ''
    password.value = ''
    window.location = 'home.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });

  })
  googlelogin.addEventListener("click" ,() =>{
    signInWithPopup(auth, provider)
  .then((result) => {
        
    const user = result.user;
    console.log(user);
  }).catch((error) => {
    
    
    const errorMessage = error.message;
    console.log(errorMessage);
    
    
  });
  })

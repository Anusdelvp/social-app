import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";

const input_form = document.querySelector('#input_form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

input_form.addEventListener('submit', event => {
  event.preventDefault();

  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    email.value = ''
    password.value = ''
    
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
})
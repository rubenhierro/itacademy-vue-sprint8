<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import User from "../classes/userClass"
import { LoginStore } from '../stores/LoginStore'

const store = LoginStore()
const router = useRouter()
const hasUser = ref(null)
const firstname = ref('')
const lastname = ref('')
const email = ref('')
const username = ref('')
const password = ref('')
const errors = ref([])
const isValid = {
  firstname: null,
  lastname: null,
  email: null,
  username: null,
  password: null
}

function checkForm() {
  // Fistname
  errors.value = [];
  if (!firstname.value) {
    errors.value.push("Firstname required.");
    isValid.firstname = false;
  }
  else if (!validateRegex('[a-zA-Z ]{3,25}', firstname.value)) {
    errors.value.push('Valid Firstname required')
    isValid.firstname = false;
  }

  // Lastname
  if (!lastname.value) {
    errors.value.push("Lastname required.")
    isValid.lastname = false
  }
  else if (!validateRegex('[a-zA-Z ]{3,25}', lastname.value)) {
    errors.value.push('Valid lastname required')
    isValid.lastname = false
  }

  //Email
  if (!email.value) {
    errors.value.push("Email required.")
    isValid.email = false
  }
  else if (!validateRegex('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$', email.value)) {
    errors.value.push("Valid email required.")
    isValid.email = false
  }

  // Username
  if (!username.value) {
    errors.value.push("Username required.")
    isValid.username = false;
  }
  else if (!validateRegex('[a-zA-Z ]{3,25}', username.value)) {
    errors.value.push('Valid username required')
    isValid.username = false;
  }

  // Password
  if (!password.value) {
    errors.value.push("Password required.")
    isValid.password = false
  }
  else if (password.value.length < 8) {
    errors.value.push("Password  min length required is 8")
    isValid.password = false
  }

  if (!errors.value.length) register()
}

function validateRegex(re, value) {
  const regex = new RegExp(re)
  return regex.test(value);
}

function register() {
  const user = new User(firstname.value, lastname.value, email.value, username.value, password.value)
  hasUser.value = store.hasUser(username.value)

  if (!hasUser.value) {
    store.setUser(user)
    store.setIsLogged(true)
    router.push({ name: 'starships' })
  } else {
    document.getElementById('register-form').reset()
  }
}
</script>
<template>
  <div class="container">
    <div v-if="!store.isLogged" class="form">
      <h1>Register</h1>
      <form id="register-form" @submit.prevent="checkForm">
        <p v-if="errors.length" class="alert">
          <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
        </p>
        <label for="firstname">First name:</label>
        <input type="text" id="firstname" v-model="firstname" :class="{ invalid: isValid.firstname === false }" />
        <br />
        <label for="lastname">Last name:</label>
        <input type="text" id="lastname" v-model="lastname" :class="{ invalid: isValid.lastname === false }" />
        <br />
        <label for="email">Email:</label>
        <input type="text" id="email" v-model="email" :class="{ invalid: isValid.email === false }" />
        <br />
        <label for="username">User name:</label>
        <input type="text" id="username" v-model="username" :class="{ invalid: isValid.username === false }" />
        <br />
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" :class="{ invalid: isValid.password === false }" />
        <br />
        <button>Create Account</button>
      </form>
      <p class="alert" v-if="hasUser">Sorry, this user already exists!</p>

      <span>Already have an account?</span>
      <router-link :to="{ name: 'login' }">Sign in</router-link>
    </div>

    <div v-else v-container>
      <h3>User already logged</h3>
      <a href="#" @click="store.logout">LOGOUT</a>
    </div>
  </div>
</template>
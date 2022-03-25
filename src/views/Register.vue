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

function register(e) {
  // const name = username.value
  // const pw = password.value
  // const user = new User(name, pw)
  // hasUser.value = store.hasUser(user)

  // if (!hasUser.value) {
  //   store.setUser(user)
  //   store.setIsLogged(true)
  //   router.push({ name: 'starships' })
  // } else {
  //   document.getElementById('register-form').reset()
  // }

}
</script>
<template>
  <div class="container">
    <div v-if="!store.isLogged" class="form">
      <h1>Register</h1>
      <form id="register-form" @submit.prevent="register">
        <label for="firstname">First name:</label>
        <input
          ref="input"
          type="text"
          id="firstname"
          minlength="3"
          pattern="[a-zA-Z ]{3,25}"
          v-model="firstname"
        />
        <br />
        <label for="lastname">Last name:</label>
        <input
          ref="input"
          type="text"
          id="lastname"
          v-model="lastname"
          minlength="3"
          pattern="[a-zA-Z ]{3,25}"
        />
        <br />
        <label for="email">Email:</label>
        <input
          ref="input"
          type="email"
          id="email"
          v-model="email"
          minlength="8"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
        <br />
        <label for="username">User name:</label>
        <input
          ref="input"
          type="text"
          id="username"
          v-model="username"
          minlength="3"
          pattern="[a-zA-Z ]{3,25}"
        />
        <br />
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" minlength="8" />
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
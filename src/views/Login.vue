<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import User from "../classes/userClass"
import { LoginStore } from '../stores/LoginStore'

const store = LoginStore()
const router = useRouter()
const hasUser = ref(null)
const hasPassword = ref(null)
const username = ref('')
const password = ref('')

function login() {
  if (username.value && password.value) {
    const user = new User(null, null, null, username.value, password.value)
    hasUser.value = store.hasUser(user)
    hasPassword.value = store.hasPassword(user)

    if (hasUser.value && hasPassword.value) {
      console.log('entra al push')
      store.setIsLogged(true)
      router.push({ name: 'starships' })
    }
  } else {
    if (!username.value) hasUser.value = false
    if (!password.value) hasPassword.value = false
  }
}
</script>
<template>
  <div class="container">
    <div class="form">
      <div v-if="!store.isLogged">
        <h1>Login</h1>
        <form id="login-form" @submit.prevent="login">
          <label for="username">User name:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            :class="{ invalid: hasUser === false }"
          />
          <br />
          <p class="alert" v-if="hasUser === false">Sorry, this user don't exists!</p>
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            :class="{ invalid: hasPassword === false }"
          />
          <p class="alert" v-if="hasPassword === false">Incorrect password!</p>
          <br />
          <button>Login</button>
        </form>
        <span>Already have an account?</span>
        <router-link :to="{ name: 'register' }">Create an account</router-link>
      </div>

      <div v-else class="v-container">
        <h3>User already logged</h3>
        <a href="#" @click="store.logout">LOGOUT</a>
      </div>
    </div>
  </div>
</template>
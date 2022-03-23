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
const input = ref(null)

function login() {
  const name = username.value
  const pw = password.value
  const user = new User(name, pw)
  hasUser.value = store.hasUser(user)
  hasPassword.value = store.hasUser(user)

  if (hasUser.value && hasPassword.value) {
    store.setIsLogged(true)
    router.push({ name: 'starships' })
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
          <input ref="input" type="text" id="username" v-model="username" required />
          <br />
          <p class="alert" v-if="hasUser === false">Sorry, this user don't exists!</p>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
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

<style>
</style>
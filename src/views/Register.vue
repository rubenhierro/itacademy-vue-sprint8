<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import User from "../classes/userClass"
import { LoginStore } from '../stores/LoginStore'

const store = LoginStore()
const router = useRouter()
const hasUser = ref(null)
const username = ref('')
const password = ref('')
const input = ref(null)

function register() {
  const name = username.value
  const pw = password.value
  const user = new User(name, pw)
  hasUser.value = store.hasUser(user)

  if (!hasUser.value) {
    store.setUser(user)
    store.setIsLogged(true)
    router.push({ name: 'starships' })
  } else {
    document.getElementById('register-form').reset()
  }
}

function logout() {
  store.setIsLogged(false)
  location.reload()
}
onMounted(() => input.value.focus())
</script>
<template>
  <div class="container">
    <div v-if="!store.isLogged" class="form">
      <h1>Register</h1>
      <form id="register-form" @submit.prevent="register">
        <label for="username">User name:</label>
        <input ref="input" type="text" id="username" v-model="username" required />
        <br />
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
        <br />
        <button>Create Account</button>
      </form>
      <p class="alert" v-if="hasUser">Sorry, this user already exists!</p>

      <span>Already have an account?</span>
      <router-link :to="{ name: 'login' }">Sign in</router-link>
    </div>

    <div v-else v-container>
      <h3>User already logged</h3>
      <a href="#" @click="logout">LOGOUT</a>
    </div>
  </div>
</template>

<style>
</style>
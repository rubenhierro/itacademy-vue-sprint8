<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import LoginService from "../services/LoginService"
import User from "../classes/userClass"

const router = useRouter()
const loginService = new LoginService()
const userList = ref(JSON.parse(localStorage.getItem('userList')) || [])
const hasUser = ref(null)
const hasPassword = ref(null)
const isLogged = ref(window.user)
const username = ref('')
const password = ref('')
const input = ref(null)


function login() {
  const name = username.value
  const pw = password.value
  const user = new User(name, pw)
  hasUser.value = loginService.hasUser(userList.value, user)
  hasPassword.value = loginService.hasPassword(userList.value, user)
  if (hasUser.value && hasPassword.value) {
    loginService.setIsLogged(true)
    router.push({ name: 'starships' })
  }
}

function logout() {
  loginService.setIsLogged(false)
  isLogged.value = false
}

onMounted(() => input.value.focus())

</script>
<template>
  <div class="container">
    <div class="form">
      <div v-if="!isLogged">
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
        <a href="#" @click="logout">LOGOUT</a>
      </div>
    </div>
  </div>
</template>

<style>
</style>
<script>
import LoginService from "../services/LoginService"
import User from "../classes/userClass"

const loginService = new LoginService()

export default {
  data() {
    return {
      userList: JSON.parse(localStorage.getItem('userList')) || [],
      hasUser: null,
      hasPassword: null,
      isLogged: window.user,
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      const name = this.username
      const pw = this.password
      const user = new User(name, pw)
      this.hasUser = loginService.hasUser(this.userList, user)
      this.hasPassword = loginService.hasPassword(this.userList, user)
      if (this.hasUser && this.hasPassword) {
        loginService.setIsLogged(true)
        this.$router.push({ name: 'starships' })
      }
    },
    logout() {
      loginService.setIsLogged(false)
      this.isLogged = false
    }
  },
  mounted() {
    this.$refs.input.focus()
  }
}
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
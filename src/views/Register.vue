<script>
import LoginService from "../services/LoginService"
import User from "../classes/userClass"

const loginService = new LoginService()

export default {
  data() {
    return {
      userList: JSON.parse(localStorage.getItem('userList')) || [],
      hasUser: false,
      isLogged: window.user,
      username: '',
      password: ''
    }
  },
  methods: {
    register() {
      const name = this.username
      const pw = this.password
      const user = new User(name, pw)
      this.hasUser = loginService.hasUser(this.userList, user)

      if (!this.hasUser) {
        this.userList.push(user)
        console.log(this.userList);
        loginService.setUser(this.userList)
        loginService.setIsLogged(true)
        this.$router.push({ name: 'starships' })
      } else {
        document.getElementById('register-form').reset()
      }
    }
  },
  mounted() {
    this.$refs.input.focus()
  }
}
</script>
<template>
  <div class="container">
    <div v-if="!isLogged" class="form">
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
<script>
import LoginService  from "../services/LoginService"

const loginService = new LoginService()

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      loginService.setIsLogged(true)
      this.$router.push({name: 'starships'})
    }
  }
}
</script>
<template>
  <div class="login-form">
    <div class="form">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label for="username">User name:</label>
        <input type="text" v-model="username">
        <label for="password">Password:</label>
        <input type="text" v-model="password">
        <button>Login</button>
      </form>
    </div>
  </div>
</template>

<style>
form {
  display:block
}
</style>
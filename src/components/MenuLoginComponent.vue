<script>
import LoginService from "../services/LoginService"

const loginService = new LoginService()

export default {
  data() {
    return {
      isLogged: loginService.getIsLogged()
    }
  },
  methods: {
    login() {
      loginService.setIsLogged(true)
      this.isLogged = true
    },
    logout() {
      loginService.setIsLogged(false)
      this.isLogged = false

    }
  },
}
</script>
<template>
  <div v-if="!isLogged">
      <a href="#"
      @click="login"
      >LOGIN</a> //
      <a href="#">SIGN UP</a>
  </div>
  <div v-else>
      <a href="#"
      @click="logout"
      >LOGOUT</a>
  </div>
</template>
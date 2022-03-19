<script>
import LoginService from "../services/LoginService"

const loginService = new LoginService()

export default {
  data() {
    return {
      isLogged: window.user
    }
  },
  methods: {
    logout() {
      loginService.setIsLogged(false)
      this.isLogged = false
      this.$router.push({ name: 'login' })
    }
  },
}
</script>
<template>
  <div v-if="isLogged === false">
    <router-link :to="{name: 'login' }">LOGIN</router-link>
  </div>
  <div v-else>
    <a href="#" @click="logout">LOGOUT</a>
  </div>
</template>
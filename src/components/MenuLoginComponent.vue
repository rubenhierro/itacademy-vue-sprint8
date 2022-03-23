<script setup>
import { ref } from 'vue'
import { LoginStore } from '../stores/LoginStore'

const store = LoginStore()
</script>
<template>
  <div v-if="!store.isLogged">
    <router-link :to="{ name: 'login' }">LOGIN</router-link>//
    <router-link :to="{ name: 'register' }">REGISTER</router-link>
  </div>
  <div v-else>
    <a href="#" @click="store.logout">LOGOUT</a>
  </div>
</template>
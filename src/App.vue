<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <img alt="Star Wars logo" class="logo" src="@/assets/logo-star-wars.png"  height="75" />

    <div class="login">
      <a href="#">LOGIN</a> //
      <a href="#">SIGN UP</a>
    </div>

  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';

</style>

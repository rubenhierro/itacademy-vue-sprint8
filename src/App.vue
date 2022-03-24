<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MenuComponent from './components/MenuComponent.vue';
import MenuLoginComponent from './components/MenuLoginComponent.vue';

</script>

<template>
  <div class="wrapper">
    <header>
      <img alt="Star Wars logo" class="logo" src="@/assets/logo-star-wars.png" height="75" />

      <div class="login">
        <MenuLoginComponent />
      </div>
      <MenuComponent />
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>

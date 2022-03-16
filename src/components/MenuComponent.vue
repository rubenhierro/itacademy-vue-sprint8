<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
<div class="menu">
  <ul class="menu-list">
    <li class="menu-item">
      <router-link to="/">Home</router-link>
    </li>
    <li class="menu-item active">
      <router-link to="/starships">Starships</router-link>
    </li>
  </ul>
</div>
</template>

<style scoped>
.menu {
  margin-top: 30px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}

.menu-list {
  display: flex;
  justify-content: center;
}

ul {
  margin-top: 0;
  margin-bottom: 0;
  list-style-type: none;
  text-transform: uppercase;
}

li {
  float: left;
  border: 1px solid white;
  padding: 5px;
}

li + .active {
  border-bottom: 3px solid red;
}
</style>
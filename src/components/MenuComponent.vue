<script>
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      activeItem: null,
      items: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Starships',
          path: '/starships'
        },        
      ]
    }
  },
  methods: {
    selectedItem(index) {
      this.activeItem = index;
    },
  }

}
</script>

<template>
<div class="menu">
  <ul class="menu-list">
    <li
    v-for="(item, index) of items"
    :key="index"
    :class="{ active: index === activeItem}"
    @click="selectedItem(index)"
    >
    <router-link :to="item.path">{{item.name}}</router-link>
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

.active {
  border-bottom: 3px solid red;
}
</style>
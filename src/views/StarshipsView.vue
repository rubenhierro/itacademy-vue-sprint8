<script>
import DataSource from '../data.json'

export default {
  data() {
    return {
      datasource: DataSource
    }
  },
  computed: {
    starships() {
      return this.datasource.results;
    }
  },
  methods: {
    viewStarship(index) {
      console.log(index)
    }
  }
}
</script>

<template>
<div class="starships">
  <div class="starship"
    v-for="(starship, index) of starships"
    :index="index"
    @click="viewStarship(index)"
    >
    <h3>{{ starship.name }}</h3>
    <p>{{ starship.model}}</p>
  </div>
</div>
</template>

<style>
.starhips {
  margin-top: 10px;
}

.starship {
  padding: 5px;
  margin: 10px;
  border: 1px solid white;
}

.starship:hover {
  background-color: white;
  opacity: 0.5;
  margin-left: 10px;
  position: relative;
  left: 10px;
  color: black;
  cursor: pointer;
}
</style>

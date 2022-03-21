<script> 
import StarshipService from '../services/StarshipService'

const starshipService = new StarshipService;

export default {
  data() {
    return {
      datasource: null,
      starships: null
    }
  },
  methods: {
    viewStarship(starship, index) {
      const slug = starshipService.getSlug(starship.name)
      this.$router.push(`/starships/${index}/${slug}`)
    },

    async getData() {
      const res = await fetch('https://swapi.dev/api/starships/')
      this.datasource = await res.json()
      this.starships =  this.datasource.results
      console.log(this.starships);
    }
  },
  async mounted() {
    this.getData();
  },
}
</script>

<template>
  <div class="starships" v-if="datasource">
    <div
      class="starship"
      v-for="(starship, index) of starships"
      :index="index"
      @click="viewStarship(starship, index)"
    >
      <h3>{{ starship.name }}</h3>
      <p>{{ starship.model }}</p>
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

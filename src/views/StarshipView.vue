<script>
import StarshipService from '../services/StarshipService'

const starshipService = new StarshipService;

export default {
  data() {
    return {
      dataSource: null,
      starship: null
    }
  },
  computed: {
    id() {
      return parseInt(this.$route.params.id)
    },
    name() {
      return this.$route.params.name
    },
  },
  methods: {
    viewPilots() {
      this.$router.push(`/starships/${this.id}/${this.name}/pilots`)
    },

    async getData() {
      const res = await fetch('https://swapi.dev/api/starships/')
      this.datasource = await res.json()
      this.starship = this.datasource.results[this.id]
    }
  },
  async mounted() {
    this.getData();
  },
}
</script>

<template>
  <div class="starship-item" v-if="starship">
    <h1>{{ starship.name }}</h1>
    <h2>{{ starship.model }}</h2>
    <ul>
      <li>Manufacturer: {{ starship.manufacturer }}</li>
      <li>Cost In Credits: {{ starship.cost_in_credits }}</li>
      <li>Length: {{ starship.length }}</li>
      <li>Max Atmosphering Speed: {{ starship.max_atmosphering_speed }}</li>
      <li>Crew: {{ starship.crew }}</li>
      <li>cargo Capacity: {{ starship.cargo_capacity }}</li>
      <li>Consumables: {{ starship.consumables }}</li>
      <li>Hyperdrive rating: {{ starship.hyperdrive_rating }}</li>
      <li>MGLT: {{ starship.MGLT }}</li>
      <li>Starship Class: {{ starship.starship_class }}</li>
    </ul>
    <button v-if="starship.pilots.length > 0" @click="viewPilots">View Pilots</button>
  </div>
  <div class="pilots">
    <RouterView />
  </div>
</template>

<style>
.pilots {
  margin-top: 10px;
}
</style>
<script>
import DataSource from '../data.json'

export default {
  data() {
    return {
      dataSource: DataSource
    }
  }, 
  computed: {
    id() {
      return parseInt(this.$route.params.id)
    },
    starship() {
      return this.dataSource.results[this.id]
    }
  },
  methods: {
    log() {
      console.log(this.starship);
    }
  }
}
</script>

<template>
  <div>
    <button
    @click="log"
    > yep!</button>

    <h1>{{ starship.name }}</h1>
    <h2>{{ starship.model }}</h2>
    <ul>
      <li>Manufacturer: {{ starship.manufacturer  }}</li>
      <li>Cost In Credits: {{ starship.cost_in_credits  }}</li>
      <li>Length: {{ starship.length  }}</li>
      <li>Max Atmosphering Speed: {{ starship.max_atmosphering_speed  }}</li>
      <li>Crew: {{ starship.crew  }}</li>
      <li>cargo Capacity: {{ starship.cargo_capacity  }}</li>
      <li>Consumables: {{ starship.consumables  }}</li>
      <li>Hyperdrive rating: {{ starship.hyperdrive_rating  }}</li>
      <li>MGLT: {{ starship.MGLT  }}</li>
      <li>Starship Class: {{ starship.starship_class  }}</li>
    </ul>
  </div>
</template>

<style>
</style>
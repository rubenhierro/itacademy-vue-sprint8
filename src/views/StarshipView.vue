<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { starshipStore } from '../stores/StarshipsStore'
import { storeToRefs } from 'pinia'

const store = starshipStore()
const { starship } = storeToRefs(store)
const router = useRouter()
const route = useRoute()

const id = computed(() => parseInt(route.params.id))
store.setId(id.value)
const name = computed(() => route.params.name)
const getImageUrl = computed(() => {
  const image = id.value % 10;
  return new URL(`../assets/${image}.jpg`, import.meta.url).href
})

function viewPilots() {
  router.push(`/starships/${id.value}/${name.value}/pilots`)
}
</script>

<template>
  <div class="container">
    <div class="starship-item" v-if="starship">
      <img :src="getImageUrl" width="600" alt="hola" />
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
    <div v-else>Loading...</div>
    <div class="pilots">
      <RouterView />
    </div>
  </div>
</template>

<style>
.pilots {
  margin-top: 10px;
}
</style>
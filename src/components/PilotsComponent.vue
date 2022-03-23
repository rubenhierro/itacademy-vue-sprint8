<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { starshipStore } from '../stores/StarshipsStore'
import { storeToRefs } from 'pinia'

const store = starshipStore()
const { starship, pilots } = storeToRefs(store)

const route = useRoute()

onMounted(() => store.loadPilots())
</script>
<template>
  <div class="pilots" v-if="pilots">
    <div v-for="(pilot, index) of pilots" :index="index">
      <h3>{{ pilot.name }}</h3>
      <ul>
        <li>Height: {{ pilot.height }}</li>
        <li>Mass: {{ pilot.mass }}</li>
        <li>Hair Coor: {{ pilot.hair_color }}</li>
        <li>Eye Colot: {{ pilot.eye_color }}</li>
        <li>Birth Year: {{ pilot.birth_year }}</li>
        <li>Gender: {{ pilot.gender }}</li>
      </ul>
    </div>
  </div>
</template>

<style>
.pilots {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
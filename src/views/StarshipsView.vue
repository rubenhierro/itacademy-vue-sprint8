<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import StarshipService from '../services/StarshipService'
import Observer from '../components/Observer.vue'
import { starshipStore } from '../stores/StarshipsStore'

const store = starshipStore()
const router = useRouter()
const starshipService = new StarshipService;

function viewStarship(starship, index) {
  const slug = starshipService.getSlug(starship.name)
  router.push(`/starships/${index}/${slug}`)
}

async function intersected() {
  store.loadStarships()
}

onMounted(() => intersected())
</script>
<template>
  <div class="starships" v-if="store.dataSource">
    <div
      class="starship"
      v-for="(starship, index) of store.starships"
      :index="index"
      @click="viewStarship(starship, index)"
    >
      <h3>{{ starship.name }}</h3>
      <p>{{ starship.model }}</p>
    </div>
    <Observer @intersect="intersected" />
  </div>
  <div v-else>Loading...</div>
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

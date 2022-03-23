<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import StarshipService from '../services/StarshipService'
import Observer from '../components/Observer.vue'

const router = useRouter()
const starshipService = new StarshipService;

const datasource = ref([])
const starships = ref([])
const page = ref(1)

function viewStarship(starship, index) {
  const slug = starshipService.getSlug(starship.name)
  router.push(`/starships/${index}/${slug}`)
}

async function intersected() {
  const res = await fetch(`https://swapi.dev/api/starships/?page=${page.value}`)

  page.value++
  datasource.value = await res.json()
  starships.value = [...starships.value, ...datasource.value.results]
  console.log(starships.value);
}

onMounted(() => intersected())
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
    <Observer @intersect="intersected" />
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

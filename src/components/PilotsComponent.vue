<script>
export default {
  data() {
    return {
      dataSource: null,
      pilotsArr: null,
      pilots: []
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
  },
  methods: {
    async getData() {
      const res = await fetch('https://swapi.dev/api/starships/')
      this.datasource = await res.json()
      this.pilotsArr = this.datasource.results[this.id].pilots

      for (const pilotURL of this.pilotsArr) {
        const res = await fetch(`${pilotURL}`)
        const pilot = await res.json()
        console.log(pilot);
        this.pilots.push(pilot)
      }
    }
  },
  async mounted() {
    this.getData();
  },
}
</script>
<template>
  <div class="pilots" v-if="pilots">
    <div v-for="(pilot, index) of this.pilots" :index="index">
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
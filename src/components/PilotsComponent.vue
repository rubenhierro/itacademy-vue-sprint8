<script>
import DataSource from '../data.json'
import Pilots from '../pilots.json'

export default {
  data() {
    return {
      dataSource: DataSource,
      pilots: Pilots
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },

    // pilots() {
    //   return datasource.results[this.id].pilots
    // }
  }
}
</script>
<template>
  <div class="pilots">
    <div v-for="(pilot, index) of this.pilots"
    :index="index"
    >
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
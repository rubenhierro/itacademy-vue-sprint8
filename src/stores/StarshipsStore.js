import { defineStore } from "pinia";

export const starshipStore = defineStore({
  id: "starships",
  state: () => ({
    dataSource: [],
    starships: [],
    id: null,
    page: 1,
  }),
  getters: {

  },
  actions: {
    loadStarships() {
      const res = await fetch(`https://swapi.dev/api/starships/?page=${this.page}`)

      this.page++
      this.datasource = await res.json()
      this.starships = [...this.starships, ...this.datasource.results]
      console.log(this.starships);
    },
  },
});

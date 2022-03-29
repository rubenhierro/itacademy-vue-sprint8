import { defineStore } from "pinia";

export const starshipStore = defineStore({
  id: "starships",
  state: () => ({
    dataSource: [],
    starships: [],
    pilots: [],
    id: null,
    page: 1,
  }),
  getters: {
    starship: (state) => state.starships[state.id],
    pilotsArr: (state) => state.starship.pilots,
  },
  actions: {
    async loadStarships() {
      if (this.page <= 4) {
        const res = await fetch(
          `https://swapi.dev/api/starships/?page=${this.page}`
        );

        this.page++;
        this.datasource = await res.json();
        this.starships = [...this.starships, ...this.datasource.results];
      }
    },
    setId(id) {
      this.id = id;
    },

    async loadPilots() {
      for (const pilotURL of this.pilotsArr) {
        const res = await fetch(`${pilotURL}`);
        const pilot = await res.json();
        this.pilots = [...this.pilots, pilot];
      }
    },
  },
});

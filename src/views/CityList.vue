<template>
  <div class="container">
    <Cities @db-click="toggleMarked" :cities="cities" />
  </div>
</template>

<script>
import Cities from "../components/Cities.vue";

export default {
  name: "CityList",
  components: {
    Cities,
  },
  data() {
    return {
      cities: [],
    };
  },
  methods: {
    async toggleMarked(city) {
      console.log("toggle marked");
      const cityToToggle = await this.fetchCity(city);

      const updatedCity = { ...cityToToggle}
      updatedCity.marked = !cityToToggle.marked

      const res = await fetch(`https://advanced-web-project-3.herokuapp.com/api/cities/${city}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedCity)
      })

      const data = await res.json();
      console.log(data)
      this.cities = data;

    },
    async fetchCity(city) {
      console.log("fetch city");

      const res = await fetch(`https://advanced-web-project-3.herokuapp.com/api/cities/${city}`);

      const data = await res.json();

      return data
    },
    async fetchCities() {
      console.log("fetch cities");

      const res = await fetch("https://advanced-web-project-3.herokuapp.com/api/cities");

      const data = await res.json();

      return data;
    },
  },
  async created() {
    this.cities = await this.fetchCities();
  },
};
</script>

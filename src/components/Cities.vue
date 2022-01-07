<template>
  <div :key="city.id" v-for="city in cities">
    <City @db-click="$emit('db-click', city.id)" :city="city" />
  </div>
</template>

<script>
import City from "./City.vue";

export default {
  name: "Cities",
  components: {
    City,
  },
  props: {
    cities: Array,
  },
  emits: ['db-click']
};
</script>

<template>
  <div @dblclick="$emit('db-click', city.id)"
       :class="[city.marked ? 'marked' : '', 'city']">
    <h3>
      {{ city.id }}
    </h3>
    <p>{{ city.admin_name }}</p>
  </div>
</template>

<script>

export default {
  name: "City",
  props: {
    city: Object,
  },
};
</script>

<style scope>

.fas {
  color: red;
}

.city {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.marked {
  background: #808080;
}

.city h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>

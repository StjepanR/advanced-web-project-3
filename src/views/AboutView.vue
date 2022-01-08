<template>
  <About />
  <div>
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
  </div>
</template>

<script>
import About from '../components/About.vue';

export default {
  name: 'AboutView',
  components: {
    About,
  },
  data() {
    return {
      message: 'Hello'
    }
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
}
</script>
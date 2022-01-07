<template>
  <div class="counter">
    <p>Calculator usages: {{ this.$store.state.count }}</p>
  </div>
  <div>
    <form class="add-form">
      <div class="form-control">
        <label>Value in cm</label>
        <input type="number" name="cm" v-model.number="cm" @change="cmToInch" @keyup="cmToInch" placeholder="cm">
      </div>
      <div class="form-control">
        <label>Value in inch</label>
        <input type="number" name="inch" v-model.number="inch" @change="inchToCm" @keyup="inchToCm" placeholder="inch">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      cm: "",
      inch: ""
    }
  },
  methods: {
    cmToInch() {
      this.$store.commit('increment')
      this.inch = this.cm * 0.3937007874
    },
    inchToCm() {
      this.$store.commit('increment')
      this.cm = this.inch * 2.54
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.counter {
  font-family: 'Poppins', sans-serif;
  text-align: left;
  max-width: 500px;
  margin: 10px auto;
  overflow: auto;
  border: 1px solid steelblue;
  padding: 13px;
  border-radius: 5px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}

</style>
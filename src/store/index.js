import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
  },
  getters: {
    count() {
      return this.state.count
    }
  }
});

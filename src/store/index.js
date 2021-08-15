import { createStore } from "vuex";

export const store = createStore({
  state: {
    count: 1,
  },
  mutations: {
    setCounter: (state) => state.count * 2,
  },
  actions: {},
  modules: {},
});

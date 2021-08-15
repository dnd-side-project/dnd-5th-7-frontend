import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { roomStore } from "./modules/room_module";

export default createStore({
  modules: { roomStore },
  plugins: [createPersistedState()],
});

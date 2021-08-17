import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { roomStore } from "./modules/room_module";
import { userStore } from "./modules/user_module";
export default createStore({
  modules: { roomStore, userStore },
  plugins: [createPersistedState()],
});

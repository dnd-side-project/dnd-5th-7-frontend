import userService from "../../api/Room/services/user.service";

const { GetUserData } = userService;
export const userStore = {
  namespaced: true,
  state: () => ({
    user: {
      id: "",
      nick: "",
      photoUrl: "",
    },
  }),
  getters: {
    getUser: (state) => {
      return state.user;
    },
  },
  mutations: {
    setUser(state, payload) {
      const { id, nick, photoUrl } = payload.data;
      state.user = {
        id: id,
        nick: nick,
        photoUrl: photoUrl,
      };
    },
  },
  actions: {
    async FETCH_USER({ commit }) {
      const data = await GetUserData();
      await commit("setUser", data);
    },
  },
};

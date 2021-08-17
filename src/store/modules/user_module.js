import userService from "../../api/Room/services/user.service";

const { GetUserData } = userService;
export const userStore = {
  state: () => ({
    user: {
      id: "",
      nick: "",
      phothUrl: "",
    },
  }),
  getters: {
    getUser: (state) => {
      return state.user;
    },
  },
  mutations: {
    setUser(state, value) {
      state.user = value;
    },
  },
  actions: {
    async FETCH_USER({ commit }) {
      const response = await GetUserData();
      commit("setUser", response.data);
      console.log(response);
      return response;
    },
  },
};

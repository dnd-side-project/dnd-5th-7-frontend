export const roomStore = {
  state: () => ({
    RoomList: [],
    RoomDetail: [],
  }),
  getters: {
    getRoomDetail: (state) => {
      return state.RoomDetail;
    },
    RoomList: (state) => {
      return state.RoomList;
    },
  },
  mutations: {
    setRoomList(state, value) {
      state.RoomList = value;
    },
    addRoomList(state, data) {
      state.RoomList.push(data);
    },
  },
  actions: {
    test() {
      console.log("testttt");
    },
  },
};

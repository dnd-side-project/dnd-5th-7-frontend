export const roomStore = {
  state: () => ({
    RoomList: [],
    RoomDetail: [],
    LikeRoomList: [],
    INGRoomList: [],
    userList: [],
  }),
  getters: {
    getRoomDetail: (state) => {
      return state.RoomDetail;
    },
    getRoomList: (state) => {
      return state.RoomList;
    },
    getLikeRoomList: (state) => {
      return state.LikeRoomList;
    },
    getINGRoomList: (state) => {
      return state.INGRoomList;
    },
    getUserList: (state) => {
      return state.userList;
    },
  },
  mutations: {
    setRoomList(state, value) {
      state.RoomList = value;
    },
    addRoomList(state, data) {
      state.RoomList.push(data);
    },
    setRoomDetail(state, value) {
      state.RoomList = value;
    },
    setLikeRoomList(state, value) {
      state.LikeRoomList = value;
    },
    addLikeRoomList(state, data) {
      state.LikeRoomList.push(data);
    },
    setINGRoomList(state, value) {
      state.INGRoomList = value;
    },
    addINGRoomList(state, data) {
      state.INGRoomList.push(data);
    },
    setUserList(state, value) {
      state.userList = value;
    },
    addUserList(state, data) {
      state.userList.push(data);
    },
  },
  actions: {
    test() {
      // console.log("testttt");
    },
  },
};

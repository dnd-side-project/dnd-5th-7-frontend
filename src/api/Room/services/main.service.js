import { instance } from "../..";
// import { userStore } from "../../../store/modules/user_module";

class MainServices {
  // uid = computed(() => useStore().state.userStore.user.id);
  GetCalendar(date) {
    //  진행중인 기록 리스트 조회
    return (
      instance
        .get("/main/calenda", { date: date })
        // "2021-08" 형식의 date 넣어줘야 함
        .then((res) => {
          console.log("유저 데이터응답 : ", res);
        })
        .catch((e) => {
          console.log("error : ", e);
        })
    );
  }
  async GetInProgress() {
    //  진행중인 기록 리스트 조회
    try {
      const response = instance.get("/main/inProgress/");
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  async GetInProgressList() {
    //  진행중인 기록 리스트 상세 조회
    try {
      const response = await instance.get("/main/inProgressList/");
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  async GetBookmark() {
    //  즐겨찾기 한 기록 리스트 조회
    try {
      const response = instance.get("/main/bookmark/");
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  async GetBookmarkList() {
    //  즐겨찾기 한 기록 리스트 상세 조회
    try {
      const response = instance.get("/main/bookmarkList/");
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new MainServices();

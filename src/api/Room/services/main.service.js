import { instance } from "../..";
// import { userStore } from "../../../store/modules/user_module";

class MainServices {
  // uid = computed(() => useStore().state.userStore.user.id);
  async GetCalendar(date) {
    //  달력에 표시될 정보 조회
    try {
      const response = await instance.get("/main/calendar/" + date);
      return response;
      // "2021-08" 형식의 date 넣어줘야 함
    } catch (e) {
      console.log(e);
    }
  }
  async GetCalendarDetail(date) {
    //  달력 세부 정보 조회
    try {
      const response = await instance.get("/main/calendarDatail/" + date);
      return response;
      // "2021-08-11" 형식의 date 넣어줘야 함
    } catch (e) {
      console.log(e);
    }
  }
  async GetInProgress() {
    //  진행중인 기록 리스트 조회
    try {
      const response = await instance.get("/main/inProgress/");
      return response;
    } catch (e) {
      console.log(e);
    }
  }
  async GetInProgressList(desc) {
    //  진행중인 기록 리스트 상세 조회
    try {
      const response = await instance.get("/main/inProgressList/" + desc);
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
  async GetBookmarkList(desc) {
    //  즐겨찾기 한 기록 리스트 상세 조회
    try {
      const response = instance.get("/main/bookmarkList/" + desc);
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new MainServices();
